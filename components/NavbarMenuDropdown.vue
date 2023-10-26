<script setup lang="ts">
import { type Section } from "@/interfaces/layout";

defineProps<{
  name: string;
  url?: URL;
  type?: string;
  sections: Array<Section>;
}>();

const isHover = ref(false);

const setIsHover = (value: boolean) => {
  isHover.value = value;
};
</script>

<template>
  <div @mouseleave="() => setIsHover(false)">
    <NuxtLink
      @click="() => setIsHover(!isHover)"
      @mouseenter.stop="() => setIsHover(true)"
      class="h-[74px] flex justify-center items-center px-8 text-lg font-extralight"
    >
      {{ name }}
    </NuxtLink>

    <div
      :class="`absolute
      z-[1000]
      left-0
      w-full
      bg-base-200
      bg-opacity-70
      backdrop-blur-sm
      -mt-1
      focus:outline-none
      ${isHover ? `block` : `hidden`}`"
    >
      <div class="w-full flex space-x-12 md:px-16 md:py-8">
        <!-- sections  -->
        <div v-for="(section, indexSection) in sections">
          <div
            :key="`section- + ${indexSection}`"
            class="flex flex-col text-lg capitalize"
          >
            <h2 class="text-black font-light mb-4">{{ section.title }}</h2>
            <!-- Links -->
            <NuxtLink
              v-for="(page, indexPage) in section.pages.data"
              @click="() => setIsHover(!isHover)"
              :key="`page- ${indexPage}`"
              :to="`/${page.attributes.slug}`"
              class="font-extralight mb-3"
            >
              {{ page.attributes.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

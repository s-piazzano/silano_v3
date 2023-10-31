<script setup lang="ts">
import { type Layout } from "@/interfaces/layout";

defineProps<{
  layout: Array<Layout>;
  imageUrl: string;
}>();

const [isOpen, setIsOpen] = useS(false);
</script>

<template>
  <div class="inline">
    <!-- HamburgerButton  -->
    <button
      class=""
      aria-label="hamburger menu"
      @click="() => setIsOpen(!isOpen)"
    >
      <Icon
        name="material-symbols-light:menu"
        class="w-[42px] h-[42px] text-stone-600 font-thin focus:outline-none"
      />
    </button>
    <!-- Menu Container  -->
    <div
      v-if="isOpen"
      class="fixed z-[1000] left-0 top-0 w-full h-screen bg-gray-900 bg-opacity-30 flex text-lg p-1"
    >
      <div class="w-1/4" @click="() => setIsOpen(false)"></div>
      <div
        class=" w-3/4 h-full bg-base-200 bg-opacity-100 rounded-xl flex flex-col overflow-y-auto p-2 "
      >
        <h2 class="px-4 py-2 text-end">SILANO SRL</h2>
        <div v-for="x in layout" :key="x.id">
          <!-- Check DropdownMenu type -->
          <AppCollapse
            v-if="x.__typename === 'ComponentDropdownMenu'"
            class="px-4"
            :key="x.id"
            :title="x.name.toUpperCase()"
          >
            <div class="flex flex-col">
              <div
                v-for="(section, index) in x.sections"
                :key="index"
                class="pl-2 pt-2 text-black"
              >
                <h2 class="">{{ section.title }}</h2>
                <div class="text-stone-600 flex flex-col space-y-2 mx-2 my-4">
                  <NuxtLink
                    v-for="(page, index) in section.pages.data"
                    :key="index"
                    :to="page.attributes.slug"
                    @click="() => setIsOpen(false)"
                  >
                    {{ page.attributes.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </AppCollapse>

          <NuxtLink
            v-if="x.__typename === 'ComponentCommonLink'"
            :key="'link-' + x.id"
            :to="x.url"
            class="py-4 px-4 text-stone-600 uppercase font-extralight"
          >
            {{ x.linkName }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- End Menu Container-->
  </div>
</template>

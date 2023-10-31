<script setup lang="ts">
import { type LinkInt } from "@/interfaces/common";

const {
  id,
  className,
  imageUrl = "https://silano-3r.fra1.digitaloceanspaces.com/3r/eb7b1453f0328c5136fe884112e2b89c.jpg?updated_at=2023-02-16T10:32:29.892Z",
  title,
  description,
  link,
  containerClass,
  titleClass,
  descriptionClass,
  linkClass,
} = defineProps<{
  id: string;
  className: string;
  imageUrl: string;
  title: string;
  description: string;
  link: LinkInt;
  containerClass: string;
  titleClass?: string;
  descriptionClass?: string;
  linkClass?: string;
}>();
</script>

<template>
  <div
    :id="id"
    :class="`bg-neutral-100 w-full md:max-w-sm  rounded overflow-hidden shadow-lg flex flex-col ${className}`"
  >
    <NuxtImg
      class="w-full"
      :src="`${imageUrl}`"
      width="600"
      height="400"
      alt="image-card"
    />

    <div :class="`py-4 grow ${containerClass}`">
      <div class="`font-normal text-xl mb-2 ${titleClass}`">{{ title }}</div>
      <p class="`text-gray-700 font-light ${descriptionClass}`">
        {{ description }}
      </p>
    </div>
    <div :class="`pt-4 pb-2 ${linkClass}`">
      <NuxtLink :to="link.url" class="inline-block font-medium text-forest">
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

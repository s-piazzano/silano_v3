<script setup lang="ts">
import Markdown from "vue3-markdown-it";
import { type Layout } from "~/interfaces/layout";

defineProps<{
  layout: Array<Layout>;
}>();
</script>

<template>
  <div class="flex flex-col bg-base-200">
    <div
      class="w-full mt-8 px-4 md:px-16 py-8 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between"
    >
      <div v-for="x in layout" :key="x.id">
        <div
          v-if="x.__typename === 'ComponentFooterCard'"
          class="flex flex-col"
        >
          <h2 class="mb-4">{{ x.name }}</h2>
          <Markdown :source="x.description" />
        </div>
        <div
          v-if="x.__typename === 'ComponentMenuSection'"
          class="flex flex-col space-y-2"
        >
          <h2 class="mb-2">{{ x.name }}</h2>
          <NuxtLink
            v-for="(link, index) in x.links"
            :key="index"
            :to="link.url"
            class="font-light"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="w-full h-8 text-center text-sm border-t flex items-center justify-center"
    >
      Copyright {{ new Date().getFullYear() }}
    </div>
  </div>
</template>

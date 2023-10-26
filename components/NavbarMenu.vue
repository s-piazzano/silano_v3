<script setup lang="ts">
import { type Layout } from "@/interfaces/layout";

defineProps<{
  layout: Array<Layout>;
}>();
</script>

<template>
  <div
    class="hidden w-full h-[74px] lg:flex text-stone-900 font-light uppercase text-sm tracking-widest"
  >
    <div v-for="x in layout">
      <!-- Dropdown Menu -->
      <div v-if="x.__typename === 'ComponentDropdownMenu'">
        <NavbarMenuDropdown
          :key="x.id"
          :name="x.name"
          :url="x.url"
          :type="x.type"
          :sections="x.sections"
        />
      </div>
      <div v-if="x.__typename === 'ComponentCommonLink'">
        <NuxtLink
          :key="`link- + ${x.id}`"
          :to="x.url"
          class="h-[74px] flex items-center justify-center px-4 text-lg font-extralight"
        >
          {{ x.linkName }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Layout } from "@/interfaces/layout";

defineProps<{
  imageUrl: string;
  hours?: string;
  contact: string;
  layout: Array<Layout>;
}>();
</script>

<template>
  <div class="w-full">
    <div
      class="w-full h-[32px] flex px-4 md:px-16 bg-forest  justify-center md:justify-between items-center text-white text-sm font-thin"
    >
      <h6 class="hidden md:block"></h6>
      <div class="flex divide-x">
        <NuxtLink
          target="_blank"
          rel="noreferrer"
          class="px-2"
          to="tel:+390161930380"
        >
          Tel: 0161 930380
        </NuxtLink>
        <NuxtLink
          target="_blank"
          rel="noreferrer"
          class="px-2"
          to="https://wa.me/+393929898074"
        >
          Whatsapp: 392 989 8074
        </NuxtLink>
      </div>
    </div>
    <!-- Menu -->
    <div
      class="relative w-full h-[74px] bg-base-200 border-b border-gray-200 px-4 md:px-16 flex justify-between items-center"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="w-[65px] flex flex-col items-center mr-6 -ml-1">
        <NuxtImg :src="`${imageUrl}`" width="45" height="45" alt="logo" />
        <p
          id="companyName"
          class="uppercase text-xxs text-forest opacity-0 font-light"
        >
          silano srl
        </p>
      </NuxtLink>
      <NavbarMenu :layout="layout" />
      <div class="block lg:hidden">
        <!-- <HamburgerMenu layout="{layout}" imageUrl="{imageUrl}" /> -->
      </div>
    </div>
  </div>
</template>

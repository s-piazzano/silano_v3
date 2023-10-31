<script setup lang="ts">
defineProps<{
  title: string;
  isRemakable?: boolean;
  className?: string;
}>();

const [isOpen, setIsOpen] = useS(false);
</script>

<template>
  <div :class="`flex flex-col py-4 cursor-pointer ${className}`">
    <div
      class="w-full flex justify-between items-center text-stone-600 font-normal"
      @click="() => setIsOpen(!isOpen)"
    >
      <h2 class="font-extralight">{{ title }}</h2>
      <Icon
        name="material-symbols-light:keyboard-arrow-up-rounded"
        v-if="isOpen"
        class="w-10 h-10"
      />
      <Icon
        name="material-symbols-light:keyboard-arrow-down-rounded"
        v-else
        class="w-10 h-10"
      />
    </div>
    <div v-if="isOpen" class="w-full mt-2">
      <slot></slot>
      <!-- <div v-else><slot></slot></div> -->
    </div>
  </div>
</template>

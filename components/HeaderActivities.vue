<script setup lang="ts">
import type { Activity } from "~/interfaces/common";

defineProps<{
  className?: string;
  activities: Array<Activity>;
}>();
</script>

<template>
  <div
    :class="`w-full landscape:h-screen md:landscape:h-1/3 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center items-stretch px-4 md:px-16  ${className} landscape:mt-32 lg:landscape:mt-0`"
  >
    <AppCard
      v-for="activity in activities"
      :key="activity.id"
      className="opacity-0 flex-1"
      containerClass="px-2 lg:px-6"
      linkClass="px-2 lg:px-6"
      :id="`card-${activity.id}`"
      :title="activity.title"
      :description="activity.description"
      :link="activity.link"
      :imageUrl="activity.image?.data?.attributes?.url"
    ></AppCard>
  </div>
</template>

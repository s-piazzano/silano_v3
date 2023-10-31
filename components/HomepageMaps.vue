<script setup lang="ts">
defineProps<{
  className?: string;
  width?: number;
  height?: number;
}>();
</script>

<template>
  <div :class="`w-full ${className}`">
    <div class="w-full flex justify-center">
      <iframe
        title="whereweare"
        class="w-full shadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.1638649489246!2d8.130221315554195!3d45.36568827909993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786325e10f5ac6b%3A0xb1064ec6142248e8!2sSilano%20Srl!5e0!3m2!1sit!2sit!4v1670600026007!5m2!1sit!2sit"
        :width="width"
        :height="height"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

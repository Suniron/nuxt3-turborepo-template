<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
const handleClick = () => window.alert('click')
</script>

<template>
  <button @click="handleClick">
    {{ props.text }}
  </button>
</template>

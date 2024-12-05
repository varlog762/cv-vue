<script setup lang="ts">
import type { JobInterface } from '@/interfaces'

defineOptions({
  name: 'JobComponent',
})

const { job } = defineProps<{ job: JobInterface }>()
</script>

<template>
  <h3 class="item-title">{{ job.title }}</h3>
  <div class="item-subtitle">{{ job.company }}, {{ job.period }}</div>
  <div class="text">{{ job.responsibilities }}</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;
</style>

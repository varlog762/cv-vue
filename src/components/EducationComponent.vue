<script setup lang="ts">
import type { UniversityInterface } from '@/interfaces'

defineOptions({
  name: 'EducationComponent',
})

const { education } = defineProps<{ education: UniversityInterface }>()
</script>

<template>
  <h3 class="item-title">{{ education.specialization }}</h3>
  <div class="item-subtitle">{{ education.university }} {{ education.period }}</div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
</style>

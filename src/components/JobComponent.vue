<script setup lang="ts">
import type { JobInterface } from '@/interfaces'

defineOptions({
  name: 'JobComponent',
})

const { job } = defineProps<{ job: JobInterface }>()
</script>

<template>
  <h3 class="position">{{ job.title }}</h3>
  <div class="company">{{ job.company }} {{ job.period }}</div>
  <div class="obligations text">{{ job.responsibilities }}</div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.position {
  color: $dark;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 10px;
}

.company {
  margin-bottom: 16px;
  font-family: Prata, serif;
  font-size: 17px;
  line-height: 19px;
  color: $grey;
}

.obligations {
  margin-bottom: 16px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: $dark;
}
</style>

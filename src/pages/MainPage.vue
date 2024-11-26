<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import WorkExperienceComponent from '@/components/WorkExperienceComponent.vue'

defineOptions({
  name: 'MainPage',
})
</script>

<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <WorkExperienceComponent />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

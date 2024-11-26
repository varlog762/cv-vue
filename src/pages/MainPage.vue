<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import WorkExperienceComponent from '@/components/WorkExperienceComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'
import AboutMeComponent from '@/components/AboutMeComponent.vue'

defineOptions({
  name: 'MainPage',
})
</script>

<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <WorkExperienceComponent />
      <EducationComponent />
      <AboutMeComponent />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { ProfileInterface } from '@/interfaces'
import HeaderComponent from '@/components/HeaderComponent.vue'
import JobComponent from '@/components/JobComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'

defineOptions({
  name: 'MainPage',
})

const profileData = ref<ProfileInterface | null>(null)

onMounted(() => {
  fetch('/json/profile-data-ru.json')
    .then((response) => response.json())
    .then((data) => {
      profileData.value = data
    })
    .catch((error) => {
      console.error('Error fetching profile data:', error)
    })
})
</script>

<template>
  <div class="container" v-if="profileData">
    <HeaderComponent :personal-info="profileData.personalInfo" :position="profileData.position" />
    <main class="main">
      <div class="flex">
        <section class="experience">
          <h2 class="section-title">Опыт работы</h2>
          <JobComponent v-for="job in profileData.workExperience" :key="job.period" :job="job" />
        </section>
        <section class="education">
          <h2 class="section-title">Образование и дополнительное образование</h2>
          <EducationComponent
            v-for="education in profileData.education"
            :key="education.period"
            :education="education"
          />
        </section>
      </div>
      <section class="about-me">
        <h2 class="section-title">Обо мне</h2>
        <div class="text">{{ profileData.aboutMe }}</div>
      </section>
      <section class="skills">
        <div class="skills-container">
          <div class="hard-skills-container">
            <h2 class="section-title">Навыки</h2>
            <div class="skill" v-for="skill in profileData.skills" :key="skill">{{ skill }}</div>
          </div>
          <div class="languages-container">
            <h3 class="section-title">Владение языками</h3>
            <div class="language" v-for="language in profileData.languages" :key="language">
              {{ language }}
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.main {
  padding: 0 32px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 80px;
}

.experience {
  max-width: 50%;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
}

.hard-skills-container {
  max-width: 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

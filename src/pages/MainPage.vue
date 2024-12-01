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
      <section class="experience section">
        <h2 class="section-title">Опыт работы</h2>
        <JobComponent v-for="job in profileData.workExperience" :key="job.period" :job="job" />
      </section>
      <section class="education section">
        <h2 class="section-title">Образование</h2>
        <EducationComponent
          v-for="education in profileData.education"
          :key="education.period"
          :education="education"
        />
      </section>
      <section class="about-me section">
        <h2 class="section-title">Обо мне</h2>
        <div class="text">{{ profileData.aboutMe }}</div>
      </section>
      <section class="projects section">
        <h2 class="section-title">Проекты</h2>
        <div class="text project">English For Kids <span>github</span></div>
        <div class="text project">Medium Clone <span>github</span></div>
        <div class="text project">Проект 3 <span>github</span></div>
        <div class="text project">Проект 4 <span>github</span></div>
        <div class="text project">Interview List <span>github</span></div>
      </section>
      <section class="skills section">
        <div class="skills-grid">
          <div class="hard-skills">
            <h2 class="section-title">Навыки</h2>
            <div class="skills-container">
              <div class="skill text" v-for="skill in profileData.skills" :key="skill">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="languages">
        <h2 class="item-title languages-title">Владение языками</h2>
        <div class="language text" v-for="language in profileData.languages" :key="language">
          {{ language }}
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.main {
  padding: 0 32px;
  display: grid;
  grid-template: repeat(2, 1fr) 0.5fr 0.5fr / repeat(4, 1fr);
  column-gap: 80px;
  grid-template-areas:
    'experience experience education education'
    'experience experience education education'
    'projects projects about-me about-me'
    'skills skills skills languages';
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 80px;
}

.experience {
  grid-area: experience;
}

.education {
  grid-area: education;
}

.about-me {
  grid-area: about-me;
}

.projects {
  grid-area: projects;
}

.project {
  margin-bottom: 8px;

  span {
    color: $grey;
  }
}

.skills-container {
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
}

.skills {
  grid-area: skills;
}

.skill {
  margin-bottom: 0;
}

.hard-skills-container {
  max-width: 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.languages {
  grid-area: languages;

  &-title {
    margin-bottom: 16px;
  }
}

.language {
  margin-bottom: 8px;
}
</style>

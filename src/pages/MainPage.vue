<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import HeaderComponent from '@/components/HeaderComponent.vue'
import JobComponent from '@/components/JobComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'
import { useProfileData } from '@/composables/useProfileData'

defineOptions({
  name: 'MainPage',
})

const { t } = useI18n()
const profileData = useProfileData()
</script>

<template>
  <div class="container">
    <HeaderComponent :position="profileData.position" :personal-info="profileData.personalInfo" />
    <main class="main">
      <section class="experience section">
        <h2 class="section-title">{{ t('titles.workExperience') }}</h2>
        <JobComponent v-for="job in profileData.workExperience" :key="job.period" :job="job" />
      </section>
      <div class="education-and-about-me">
        <section class="education section">
          <h2 class="section-title">{{ t('titles.education') }}</h2>
          <EducationComponent
            v-for="education in profileData.education"
            :key="education.period"
            :education="education"
          />
        </section>
        <section class="about-me section">
          <h2 class="section-title">{{ t('titles.aboutMe') }}</h2>
          <div class="text">{{ profileData.aboutMe }}</div>
        </section>
      </div>
      <section class="projects section">
        <h2 class="section-title">{{ t('titles.projects') }}</h2>
        <div class="projects-grid">
          <div class="text project">English For Kids <span>github</span></div>
          <div class="text project">Medium Clone <span>github</span></div>
          <div class="text project">Проект 3 <span>github</span></div>
          <div class="text project">Проект 4 <span>github</span></div>
          <div class="text project">Interview List <span>github</span></div>
        </div>
      </section>
      <section class="skills section">
        <h2 class="section-title">{{ t('titles.skills') }}</h2>
        <div class="skills-grid">
          <div class="skill text" v-for="skill in profileData.skills" :key="skill">
            {{ skill }}
          </div>
        </div>
      </section>
      <section class="languages">
        <h2 class="item-title languages-title">{{ t('titles.languages') }}</h2>
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
    'experience experience education-and-about-me education-and-about-me'
    'experience experience education-and-about-me education-and-about-me'
    'projects projects education-and-about-me education-and-about-me'
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

.education-and-about-me {
  grid-area: education-and-about-me;
}

.projects {
  grid-area: projects;
}

.projects-grid {
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column;
}

.project {
  margin-bottom: 8px;

  span {
    color: $grey;
  }
}

.skills {
  grid-area: skills;
}

.skills-grid {
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 8px;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  grid-auto-flow: column;
}

.skill {
  margin-bottom: 0;
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

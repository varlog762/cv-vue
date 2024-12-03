<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import HeaderComponent from '@/components/HeaderComponent.vue'
import JobComponent from '@/components/JobComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'
import SkillsComponent from '@/components/SkillsComponent.vue'
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
          <div class="text project" v-for="project in profileData.projects" :key="project.title">
            <a :href="project.link" target="_blank" class="project-link">{{ project.title }}</a>
            <a :href="project.githubLink" target="_blank" class="project-github-link">github</a>
          </div>
        </div>
      </section>
      <section class="skills section">
        <SkillsComponent :skills="profileData.skills" />
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
    'skills skills skills skills';
  background-color: #fbfbfb;
  padding-top: 20px;
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

  &-link {
    font-weight: bold;
    font-family: 'Prata', serif;
  }

  &-github-link {
    margin-left: 10px;
    color: $grey;
  }
}

.skills {
  grid-area: skills;
}
</style>

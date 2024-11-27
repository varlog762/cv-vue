<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { ProfileInterface } from '@/interfaces'
import HeaderComponent from '@/components/HeaderComponent.vue'
import WorkExperienceComponent from '@/components/WorkExperienceComponent.vue'
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
        <WorkExperienceComponent />
        <div>
          <EducationComponent />
          <section class="about-me">
            <h2 class="about-me-header">Обо мне</h2>
            <div class="about-me-description">
              С детства меня увлекают компьютеры и все, что с ними связано. Это увлечение стало не
              просто хобби, но и стимулом к развитию в профессиональной сфере.<br />
              Я женат и воспитываю маленького сына.<br />
              В свободное время я люблю путешествовать, открывая для себя новые места и культуры.
              Также увлекаюсь велоспортом и пешими прогулками.<br />
              Моя цель на ближайшие годы – стать экспертом в области веб-разработки. Я уверен, что
              мой пытливый ум, целеустремленность и открытость к новым знаниям позволят мне добиться
              успеха.<br />
              Уверен, что мои навыки и личные качества станут ценным активом для вашей команды.
            </div>
          </section>
        </div>
      </div>
      <section class="skills">
        <div class="skills-container">
          <h2 class="skills-title">Навыки</h2>
          <div class="hard-skills-container">
            <div class="block">HTML/CSS<br />JavaScript/TypeScript<br />Angular<br />NgRx</div>
            <div class="block">Node.js<br />Python (basic)<br />Git/Github<br />Figma</div>
            <div class="block">
              <h3 class="lang_header">Владение языками</h3>
              <div class="lang_descr">
                Русский - родной<br />Белорусский - родной<br />Английский - B1
              </div>
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

.about-me-description {
  padding-bottom: 16px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: $dark;
}
</style>

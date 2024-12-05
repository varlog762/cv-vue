<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  name: 'SkillsComponent',
})

const { skills } = defineProps<{ skills: string[] }>()

const isLanguageSkill = (skill: string): boolean => {
  const languages = ['English', 'Russian', 'Belarusian', 'Английский', 'Русский', 'Белорусский']
  return languages.some((language) => skill.startsWith(language))
}
</script>

<template>
  <h2 class="section-title">{{ t('titles.skills') }}</h2>
  <div class="skills-grid">
    <div
      class="skill text"
      v-for="skill in skills"
      :key="skill"
      :class="{ 'skill-language': isLanguageSkill(skill) }"
    >
      {{ skill }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.skills-grid {
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 8px;
  grid-template: repeat(3, 1fr) / repeat(5, 1fr);
  grid-auto-flow: column;
}

.skill {
  margin-bottom: 0;
}

.skill-language {
  color: $orange;
}
</style>

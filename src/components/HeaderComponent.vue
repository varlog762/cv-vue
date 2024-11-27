<script setup lang="ts">
import type { PersonalInfoInterface } from '@/interfaces'

defineOptions({
  name: 'HeaderComponent',
})

const { personalInfo, position } = defineProps<{
  personalInfo: PersonalInfoInterface
  position: string
}>()
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <div class="photo">
          <img src="/images/img.png" alt="My photo" class="photo-image" />
        </div>
        <div class="info">
          <h2 class="position">{{ position }}</h2>
          <h1 class="name">{{ personalInfo.firstName }}<br />{{ personalInfo.lastName }}</h1>
        </div>
        <div class="contacts">
          <a :href="`mailto:${personalInfo.email}`">
            <div class="contact_item">
              <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
              {{ personalInfo.email }}
            </div>
          </a>
          <a :href="`tel:${personalInfo.phone}`">
            <div class="contact_item">
              <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
              {{ personalInfo.phone }}
            </div>
          </a>
          <a :href="`${personalInfo.linkedInLink}`" target="_blank">
            <div class="contact_item">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
              linkedIn
            </div>
          </a>
          <a :href="`${personalInfo.githubLink}`" target="_blank">
            <div class="contact_item">
              <font-awesome-icon :icon="['fab', 'github']" class="icon" />
              github
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.header {
  min-height: 400px;
  padding-top: 72px;
  background: url(../images/background.png) center top no-repeat;
  background-size: 100% 100%;
  margin-bottom: 50px;
}

.header-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: top;
  flex-wrap: wrap;
  font-family: Prata, serif;
  font-size: 10px;
  line-height: 20px;
  color: $dark;
}

.photo {
  margin-bottom: 20px;
  height: 208px;
  width: 208px;
  border-radius: 100%;
  overflow: hidden;

  &-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 120%;
  }
}

.position {
  font-size: 28px;
  line-height: 28px;
}

.name {
  font-family: Prata, serif;
  font-size: 50px;
  line-height: 155%;
}

.contact_item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Prata', serif;
  font-size: 18px;
  line-height: 22px;
}

.icon {
  color: $orange;
}
</style>

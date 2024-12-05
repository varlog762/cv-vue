<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { PersonalInfoInterface } from '@/interfaces'
import { LocalesEnum } from '@/enums'

defineOptions({
  name: 'HeaderComponent',
})

const { position, personalInfo } = defineProps<{
  position: string
  personalInfo: PersonalInfoInterface
}>()

const { locale, t } = useI18n()

const changeLocale = () => {
  locale.value = locale.value === LocalesEnum.RU ? LocalesEnum.EN : LocalesEnum.RU
  localStorage.setItem('locale', locale.value)
}
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
          <div class="contact_item">
            <a :href="`mailto:${personalInfo.email}`"
              ><font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
              {{ personalInfo.email }}</a
            >
          </div>
          <div class="contact_item">
            <a :href="`tel:${personalInfo.phone}`">
              <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
              {{ personalInfo.phone }}
            </a>
          </div>
          <div class="contact_item">
            <a :href="`${personalInfo.linkedInLink}`" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
              linkedIn
            </a>
          </div>
          <div class="contact_item">
            <a :href="`${personalInfo.githubLink}`" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" class="icon" />
              github
            </a>
          </div>
        </div>
      </div>
      <div class="switch-language" @click="changeLocale">{{ t('switchLanguage') }}</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.header {
  min-height: 400px;
  padding-top: 72px;
  background: url(../images/background.png) center top no-repeat;
  background-size: 100% 100%;
  background-color: $light-grey;

  @include media-for-small-laptop {
    min-height: auto;
    background-image: none;
    background-color: $header-bg;
    padding-left: 20px;
    padding-right: 20px;
  }

  @include media-for-tablet {
  }
}

.header-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: top;

  @include media-for-small-laptop {
    display: grid;
    grid-template: 3fr 1fr / repeat(2, 1fr);
    grid-template-areas:
      'info photo'
      'contacts contacts';
  }
}

.photo {
  margin-bottom: 20px;
  height: 208px;
  width: 208px;
  border-radius: 100%;
  overflow: hidden;
  grid-area: photo;

  &-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 120%;
  }

  @include media-for-small-laptop {
    justify-self: center;
  }
}

.info {
  grid-area: info;

  @include media-for-small-laptop {
    justify-self: end;
    align-self: center;
  }

  @include media-for-tablet {
    justify-self: end;
  }
}

.position {
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 20px;

  @include media-for-small-laptop {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 16px;
  }

  @include media-for-tablet {
    font-size: 20px;
    line-height: 20px;
  }
}

.name {
  font-family: $prata;
  font-size: 50px;
  line-height: 155%;

  @include media-for-small-laptop {
    font-size: 44px;
  }

  @include media-for-tablet {
    font-size: 36px;
  }
}

.contacts {
  grid-area: contacts;

  @include media-for-small-laptop {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
}

.contact_item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: $prata;
  font-size: 18px;
  line-height: 22px;

  a {
    font-family: $prata;
  }

  @include media-for-tablet {
    font-size: 16px;
    line-height: 18px;
  }
}

.icon {
  color: $orange;
}

.switch-language {
  position: absolute;
  top: -50px;
  right: 30px;
  font-size: 18px;
  line-height: 20px;
  color: $orange;
  text-decoration: underline;
  cursor: pointer;
}
</style>

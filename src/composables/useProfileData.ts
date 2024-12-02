import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import type { ProfileInterface } from '@/interfaces'
import profileData from '@/data/profile-data.json'

export const useProfileData = () => {
  const { locale } = useI18n()
  const currentProfile = ref<ProfileInterface>(profileData[locale.value as 'ru' | 'en'])

  watch(locale, () => {
    currentProfile.value = profileData[locale.value as 'ru' | 'en']
  })

  return currentProfile
}

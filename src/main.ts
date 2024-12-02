import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n, useI18n } from 'vue-i18n'

import FontAwesomeIcon from './plugins/fontawesome'
import { languages, defaultLocale } from './i18n'

const messages = Object.assign(languages)
const localStorageLocale = localStorage.getItem('locale')
const i18n = createI18n({
  legacy: false,
  locale: localStorageLocale ?? defaultLocale,
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  },
})

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n).mount('#app')

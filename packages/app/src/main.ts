import { createApp } from 'vue'
import App from '@app/App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import '@app/styles/main.css'
import 'virtual:windi.css'
import { loadFonts } from '@app/plugins/webfontloader'
import vuetify from '@app/plugins/vuetify'

loadFonts()

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })
const head = createHead()

const app = createApp(App)
app.use(head)
app.use(router)
app.use(vuetify)
app.mount('#app')
// Although not strictly associated with the MVVM pattern (opens new window),
// Vue's design was partly inspired by it. As a convention,
// we often use the variable vm (short for ViewModel) to refer to a component instance.

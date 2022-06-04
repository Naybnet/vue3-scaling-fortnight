import { createApp } from 'vue'
import App from '@app/App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

import './styles/main.css'
import 'virtual:windi.css'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(App)
app.use(router)
app.mount('#app')
// Although not strictly associated with the MVVM pattern (opens new window),
// Vue's design was partly inspired by it. As a convention,
// we often use the variable vm (short for ViewModel) to refer to a component instance.

import { defineSetupVue3 } from 'histoire/client'
import { createHead } from '@vueuse/head'

import '@app/styles/main.css'
import 'virtual:windi.css'
import { loadFonts } from '@app/plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
;(global as any).CSS = { supports: () => false }
import { createVuetify } from 'vuetify'

loadFonts()

export const setupVue3 = defineSetupVue3(({ app }) => {
  const head = createHead()
  const vuetify = createVuetify()
  app.use(head)
  app.use(vuetify)
})

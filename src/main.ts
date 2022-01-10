import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)
app.mount("#app")
// Although not strictly associated with the MVVM pattern (opens new window),
// Vue's design was partly inspired by it. As a convention,
// we often use the variable vm (short for ViewModel) to refer to a component instance.

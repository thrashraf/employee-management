// app.js

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import AppComponent from './App.vue'
import router from './router/index'

const app = createApp({
    components: {
        AppComponent,
    }
})

// createApp(App).mount("#app").use(router)
app.use(router).mount('#app');
// app.js

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import { createStore } from 'vuex';
import router from './router/index'

import '../css/app.css'; 
import AppComponent from './App.vue'

import auth from './store/auth';
import axios from 'axios';


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers = { 'Access-Control-Allow-Origin': true,'Accept': 'application/json' }

const app = createApp({
    components: {
        AppComponent,
    }
})

const store = createStore({
    modules: {
        auth
    }
})

app.use(store).use(router).mount('#app');

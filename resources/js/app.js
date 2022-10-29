// app.js

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import { createStore } from 'vuex';
import router from './router/index'

import Antd from "ant-design-vue";
import AppComponent from './App.vue'
import "ant-design-vue/dist/antd.css";

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

app.use(Antd).use(store).use(router).mount('#app');

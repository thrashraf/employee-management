import { createRouter, createWebHistory } from "vue-router";
import Home from '../Components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.meta),
    routes
});

export default router;
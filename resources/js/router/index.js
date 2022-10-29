import { createRouter, createWebHistory } from "vue-router";
import Home from '../Components/Home.vue'
import signIn from '../Components/SignIn.vue'
import signUp from '../Components/SignUp.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { layout: 'StandardLayout' },
    },
    {
        path: '/signIn',
        name: 'SignIn',
        component: signIn,
        meta: { layout: 'AuthLayout' },
    },
    {
        path: '/signUp',
        name: 'SignUp',
        component: signUp,
        meta: { layout: 'AuthLayout' },
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.meta),
    routes
});

export default router;
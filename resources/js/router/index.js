import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;
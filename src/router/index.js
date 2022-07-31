import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';
import Layout from '../components/Layout.vue';
const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children:
        [
            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/contact',
                name: 'Contact',
                component: Contact,
            },
            {
                path: '/portfolio',
                name: 'Portfolio',
                component: Portfolio
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
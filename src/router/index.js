import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: 'home',
        path: "/",
        component: () => import('../views/Home.vue'),
    },
    {
        name: 'search',
        path: "/search",
        component: () => import('../views/Search.vue'),
    },
    {
        name: 'collection',
        path: "/collection",
        component: () => import('../views/Collection.vue'),
    },
];

const router = createRouter({
    linkExactActiveClass: 'bg-active text-white',
    history: createWebHistory(),
    mode: 'history',
    routes,
});

export default router;
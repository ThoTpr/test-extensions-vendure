import { createRouter, createWebHistory } from 'vue-router';
import CardPageListViewVue from '../views/CardPageListView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'card-list',
            component: CardPageListViewVue,
        },
        {
            path: '/customer',
            name: 'customer-car-list',
            component: CardPageListViewVue,
        },
    ],
});

export default router;

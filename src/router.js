import Vue from 'vue';
import Router from 'vue-router';

import ContactList from './components/ContactList'
import Login from './components/Auth/Login'

Vue.use(Router);

const routes = [
    {
        name: 'home',
        path: '/',
        component: ContactList
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            guest: true
        }
    },
    // {
    //     path: '*',
    //     name: 'not-found',
    //     component: ErrorPage
    // }
];

const router = new Router({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (isAuthenticated && to.meta.guest) {
        return next({ name: 'home' });
    }
    if (!isAuthenticated && !to.meta.guest) {
        return next({ name: 'login' });
    }
    return next();
});

export default router;

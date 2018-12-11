import Vue from 'vue';
import Router from 'vue-router';

import ContactList from './components/ContactList'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: ContactList
    }
];

const router = new Router({
    routes
});

export default router;

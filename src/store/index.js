import Vue from 'vue';
import Vuex from 'vuex';

import contactsStore from './contacts-store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        contactsStore
    }
});

export default store;


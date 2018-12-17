import Vue from 'vue';
import Vuex from 'vuex';

import contactsStore from './contacts-store';
import authStore from './auth-store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    contactsStore,
    authStore
  }
});

export default store;


import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import attivita from './modules/attivita'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },

    getters: {

    },

    mutations: {

    },
    actions: {

    },
    modules: {
        auth,
        attivita
    }
})

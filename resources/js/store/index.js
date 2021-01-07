import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import attivita from './modules/attivita'
import ragazzi from './modules/ragazzi'
import vetture from './modules/vetture'
import operatori from './modules/operatori'
import associa from './modules/associa'
import viaggi from './modules/viaggi'
import logs from './modules/logs'

Vue.use(Vuex);

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
        attivita,
        ragazzi,
        vetture,
        operatori,
        associa,
        viaggi,
        logs
    }
})

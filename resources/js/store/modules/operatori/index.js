import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            presenze: [],
            operatori: [],
            settimanaAttuale: '',
            statistiche: [],
            settimane: [],
            totore: '',
            operatore: '',
            load: false
        };
    },
    mutations,
    actions,
    getters
};

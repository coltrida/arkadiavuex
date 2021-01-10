import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            ragazzi: [],
            attivita: [],
            statisticheattivita: [],
            statistichekm: [],
            costoTotale: '',
            kmTotale: '',
            ragazzo: ''
        };
    },
    mutations,
    actions,
    getters
};

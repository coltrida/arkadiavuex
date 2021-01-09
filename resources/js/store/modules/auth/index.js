import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            isLogged: false,
            user_id: '',
            user: '',
            oresettimanali: '',
            oresaldo: ''
        };
    },
    mutations,
    actions,
    getters
};

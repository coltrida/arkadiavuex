export default {
    login(state, payload) {
        state.isLogged = true;
        state.user = payload.name;
        state.oresettimanali = payload.oresettimanali;
        state.oresaldo = payload.oresaldo;
    },

    logout(state) {
        state.isLogged = false;
        state.user = '';
        state.oresettimanali = '';
        state.oresaldo = '';
    },
};

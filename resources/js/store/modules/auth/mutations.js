export default {
    login(state, payload) {
        state.isLogged = true;
        state.user_id = payload.id;
        state.user = payload.name;
        state.oresettimanali = payload.oresettimanali;
        state.oresaldo = payload.oresaldo;
        state.role = payload.role;
    },

    register(state, payload) {
        state.isLogged = true;
        state.user_id = payload.id;
        state.user = payload.name;
        state.oresettimanali = payload.oresettimanali;
        state.oresaldo = payload.oresaldo;
        state.role = payload.role;
    },

    logout(state) {
        state.isLogged = false;
        state.user_id = '';
        state.user = '';
        state.oresettimanali = '';
        state.oresaldo = '';
    },

    error(state, payload){
        state.error = payload;
    },

    clear(state){
        state.isLogged= false;
        state.user_id= '';
        state.error= '';
        state.user= '';
        state.oresettimanali= '';
        state.oresaldo= '';
    }
};

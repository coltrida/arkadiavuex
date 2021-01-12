export default {
    loadviaggi(state, payload) {
        state.viaggi = payload;
    },

    inserisciviaggio(state, payload){
        state.viaggi.unshift(payload)
    },

    eliminaviaggio(state, indice){
        state.viaggi.splice(indice, 1)
    },

    load(state, payload) {
        state.load = payload;
    },
};

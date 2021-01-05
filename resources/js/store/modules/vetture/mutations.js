export default {
    setVetture(state, payload) {
        state.vetture = payload;
    },

    inseriscivettura(state, payload){
        state.vetture.unshift(payload)
    },

    eliminavettura(state, indice){
        state.vetture.splice(indice, 1)
    }
};

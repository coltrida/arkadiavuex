export default {
    setPresenze(state, payload) {
        state.presenze = payload;
    },

    inseriscipresenza(state, payload){
        state.presenze.unshift(payload)
    },

    eliminapresenza(state, indice){
        state.presenze.splice(indice, 1)
    }
};

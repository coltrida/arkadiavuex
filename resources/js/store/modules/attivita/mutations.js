export default {
    setAttivita(state, payload) {
        state.attivita = payload;
    },

    inserisciattivita(state, payload){
        state.attivita.unshift(payload)
    },

    eliminaattivita(state, indice){
        state.attivita.splice(indice, 1)
    }
};

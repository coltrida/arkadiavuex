export default {
    setPresenze(state, payload) {
        state.presenze = payload;
    },

    inseriscipresenza(state, payload){
        state.presenze.unshift(payload)
    },

    eliminapresenza(state, indice){
        state.presenze.splice(indice, 1)
    },

    loadoperatori(state, payload) {
        state.operatori = payload;
    },

    inseriscioresettimanali(state, payload){
        let ele = state.operatori.find((operatore) => operatore.name === payload.name);
        ele.oresettimanali = payload.oresettimanali
    },
};

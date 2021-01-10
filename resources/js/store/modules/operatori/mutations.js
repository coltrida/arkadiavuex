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

    loadSettimane(state, payload){
        state.settimanaAttuale = payload[0];
        state.settimane = payload[1];
    },

    loadstatisticheoperatori(state, payload){
        state.statistiche = payload[0];
        state.totore = payload[1];
    },

    loadoperatore(state, payload){
        state.operatore = payload;
    },

    cleanstatistiche(state){
        state.statistiche = [];
        state.totore = '';
        state.operatore = ''
    }
};

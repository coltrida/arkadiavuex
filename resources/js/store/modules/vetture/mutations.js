export default {
    setVetture(state, payload) {
        state.vetture = payload;
    },

    inseriscivettura(state, payload){
        state.vetture.unshift(payload)
    },

    eliminavettura(state, indice){
        state.vetture.splice(indice, 1)
    },

    cleanstatistiche(state){
        state.statistiche = [];
        state.totale = '';
    },

    loadstatistiche(state, payload){
        //console.log(payload)
        state.statistiche = payload[0];
        state.totale = payload[1];
    }
};

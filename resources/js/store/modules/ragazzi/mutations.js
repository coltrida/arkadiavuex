export default {
    setRagazzi(state, payload) {
        state.ragazzi = payload;
    },

    inserisciragazzo(state, payload){
        state.ragazzi.unshift(payload)
    },

    eliminaragazzo(state, indice){
        state.ragazzi.splice(indice, 1)
    },

    inserisciattivita(state, payload){
        //console.log(payload)
        payload.forEach(element => {
            let ele = {
                id: element.id,
                attivita: element.attivita,
                costo: element.costo,
                giorno: element.giorno,
                quantita: element.quantita,
                ragazzo: element.ragazzo
            };
            state.attivita.unshift(ele)
        })
    },

    loadattivita(state, payload) {
        state.attivita = payload;
    },

    eliminaattivita(state, indice){
        state.attivita.splice(indice, 1)
    },

    loadstatisticheattivitaragazzi(state, payload) {
        //console.log('mutataion: '+  payload[0]);
        state.statisticheattivita = payload[0];
        state.costoTotale = payload[1];
    },

    cleanstatistiche(state) {
        state.statisticheattivita = [];
        state.costoTotale = '';
        state.ragazzo = '';
    },

    loadragazzo(state, payload) {
        state.ragazzo = payload;
    }
};

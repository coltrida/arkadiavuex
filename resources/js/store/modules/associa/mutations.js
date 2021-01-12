export default {
    setAttivitaCliente(state, payload) {
        state.attivitaragazzi = payload;
    },

    inserisciattivitacliente(state, payload){
        payload.forEach(element => {
            let ele = {id: element.id, attivita: element.attivita, ragazzo: element.ragazzo}
            state.attivitaragazzi.unshift(ele)
        })

    },

    eliminaattivitacliente(state, indice){
        state.attivitaragazzi.splice(indice, 1)
    },

    setEstrapolaAttivitaClienti(state, payload){
        state.attivitaragazziselezionati = payload;
    }
};

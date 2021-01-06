export default {
    setAttivitaCliente(state, payload) {
        state.attivitaragazzi = payload;
    },

    inserisciattivitacliente(state, payload){
        payload.forEach(element => {
            let ele = {id: element.id, activity_id: element.activity_id, client_id: element.client_id}
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

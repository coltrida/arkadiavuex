import help from '../../../helps.ts'
export default {
    loadassociazioni(context){
        axios.get(`${help().linkassociazioni}`)
            .then(response => {
                context.commit('setAttivitaCliente', response.data);
            })
    },

    inserisciassociazione(context, payload){
        axios.post(`${help().linkassociaattivitacliente}`, payload)
            .then(response => {
                //console.log('dopo: '+ response.data[0])
                context.commit('inserisciattivitacliente', response.data);
            })
    },

    eliminaassociazione(context, payload){
        axios.delete(`${help().linkassociazioni}/${payload.id}`)
            .then(() => {
                context.commit('eliminaattivitacliente', payload.indice);
            })
    },

    estrapolaassociazioneragazzi(context, id){
        axios.get(`${help().linkattivitacliente}/${id}`)
            .then(response => {
                let valori = [];
                response.data.forEach(element => {
                    valori.push(element.client_id)
                });
                context.commit('setEstrapolaAttivitaClienti', valori);
            })
    }
};

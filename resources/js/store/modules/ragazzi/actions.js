import help from '../../../helps.ts'
export default {
    loadragazzi(context){
        axios.get(`${help().linkragazzi}`)
            .then(response => {
                context.commit('setRagazzi', response.data);
            })
    },

    inserisciragazzo(context, payload){
        axios.post(`${help().linkinserisciragazzo}`, payload)
            .then(response => {
                context.commit('inserisciragazzo', response.data);
            })
    },

    eliminaragazzo(context, payload){
        axios.delete(`${help().linkragazzi}/${payload.id}`)
            .then(() => {
                context.commit('eliminaragazzo', payload.indice);
            })
    },

    inserisciattivita(context, payload){
        axios.post(`${help().linkattivitacliente}`, payload)
            .then(response => {
                context.commit('inserisciattivita', response.data);
            })
    },

    loadattivita(context){
        axios.get(`${help().linkattivitacliente}`)
            .then(response => {
                context.commit('loadattivita', response.data);
            })
    },

    eliminaattivita(context, payload){
        axios.delete(`${help().linkattivitacliente}/${payload.id}`)
            .then(() => {
                context.commit('eliminaattivita', payload.indice);
            })
    },

    loadstatisticheattivitaragazzi(context, payload){
        axios.post(`${help().linkstatistichepresenzeragazzi}`, payload)
            .then(response => {
                context.commit('loadstatisticheattivitaragazzi', response.data)
            })
    },

    loadragazzo(context, payload){
        axios.get(`${help().linkragazzi}/${payload}`)
            .then(response => {
                context.commit('loadragazzo', response.data)
            })
    },

    loadstatistichekm(context, payload){
        //console.log(payload)
        axios.post(`${help().linkchilometriragazzi}`, payload)
            .then(response => {
                //console.log(response.data)
                context.commit('loadstatistichekm', response.data)
            })
    },
};

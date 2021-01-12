import help from '../../../helps.ts'
export default {
    // caricamento lista ragazzi
    loadragazzi(context){
        axios.get(`${help().linkragazzi}`)
            .then(response => {
                context.commit('setRagazzi', response.data);
            })
    },
    // inserimento ragazzo nella lista ragazzi
    inserisciragazzo(context, payload){
        axios.post(`${help().linkinserisciragazzo}`, payload)
            .then(response => {
                context.commit('inserisciragazzo', response.data);
            })
    },
    // eliminazione ragazzo dalla lista dei ragazzi
    eliminaragazzo(context, payload){
        axios.delete(`${help().linkragazzi}/${payload.id}`)
            .then(() => {
                context.commit('eliminaragazzo', payload.indice);
            })
    },
    // inserimento delle attività svolte da specifici ragazzi
    inserisciattivita(context, payload){
        axios.post(`${help().linkattivitacliente}`, payload)
            .then(response => {
                context.commit('inserisciattivita', response.data);
            })
    },
    // caricamento lista delle attività dei ragazzi
    loadattivita(context){
        context.commit('load', true)
        axios.get(`${help().linkattivitacliente}`)
            .then(response => {
                context.commit('loadattivita', response.data);
                context.commit('load', false)
            })
    },
    // elimina attività dalla lista delle attività svolte dai ragazzi
    eliminaattivita(context, payload){
        axios.delete(`${help().linkattivitacliente}/${payload.id}`)
            .then(() => {
                context.commit('eliminaattivita', payload.indice);
            })
    },
    // caricamento delle statistiche delle attività svolte da uno specifico ragazzo
    loadstatisticheattivitaragazzi(context, payload){
        axios.post(`${help().linkstatistichepresenzeragazzi}`, payload)
            .then(response => {
                context.commit('loadstatisticheattivitaragazzi', response.data)
            })
    },
    // caricamento di uno specifico ragazzo
    loadragazzo(context, payload){
        axios.get(`${help().linkragazzi}/${payload}`)
            .then(response => {
                context.commit('loadragazzo', response.data)
            })
    },
    // caricamento delle statistiche dei km effettuati da un ragazzo
    loadstatistichekm(context, payload){
        axios.post(`${help().linkchilometriragazzi}`, payload)
            .then(response => {
                context.commit('loadstatistichekm', response.data)
            })
    },
};

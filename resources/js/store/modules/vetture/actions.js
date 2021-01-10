import help from '../../../helps.ts'
export default {
    loadvetture(context){
        axios.get(`${help().linkvetture}`)
            .then(response => {
                context.commit('setVetture', response.data);
            })
    },

    inseriscivettura(context, payload){
        axios.post(`${help().linkinseriscivettura}`, payload)
            .then(response => {
                context.commit('inseriscivettura', response.data);
            })
    },

    eliminavettura(context, payload){
        axios.delete(`${help().linkvetture}/${payload.id}`)
            .then(() => {
                context.commit('eliminavettura', payload.indice);
            })
    },

    loadstatistiche(context, payload){
        axios.post(`${help().linkchilometrivetture}`, payload)
            .then(response => {
                context.commit('loadstatistiche', response.data)
            })
    }
};

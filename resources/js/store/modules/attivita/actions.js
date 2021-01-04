import help from '../../../helps.ts'
export default {
    loadattivita(context){
        axios.get(`${help().linkattivita}`)
            .then(response => {
                context.commit('setAttivita', response.data);
            })
    },

    inserisciattivita(context, payload){
        axios.post(`${help().linkinserisciattivita}`, payload)
            .then(response => {
                context.commit('inserisciattivita', response.data);
            })
    },

    eliminaattivita(context, payload){
        axios.delete(`${help().linkattivita}/${payload.id}`)
            .then(() => {
                context.commit('eliminaattivita', payload.indice);
            })
    }
};

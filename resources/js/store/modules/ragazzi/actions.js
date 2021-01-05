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
    }
};

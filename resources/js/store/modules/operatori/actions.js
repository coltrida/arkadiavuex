import help from '../../../helps.ts'
export default {
    loadpresenze(context, payload){
        axios.get(`${help().linkpresenzeoperatore}/${payload}`)
            .then(response => {
                context.commit('setPresenze', response.data);
            })
    },

    inseriscipresenza(context, payload){
        axios.post(`${help().linkpresenzeoperatore}`, payload)
            .then(response => {
                context.commit('inseriscipresenza', response.data);
            })
    },

    eliminapresenza(context, payload){
        axios.delete(`${help().linkpresenzeoperatore}/${payload.id}`)
            .then(() => {
                context.commit('eliminapresenza', payload.indice);
            })
    }
};

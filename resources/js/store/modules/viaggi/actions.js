import help from '../../../helps.ts'
export default {
    loadviaggi(context){
        axios.get(`${help().linkchilometri}`)
            .then(response => {
                context.commit('loadviaggi', response.data);
            })
    },

    inserisciviaggio(context, payload){
        axios.post(`${help().linkinseriscichilometri}`, payload)
            .then(response => {
                context.commit('inserisciviaggio', response.data);
            })
    },

    eliminaviaggio(context, payload){
        axios.delete(`${help().linkchilometri}/${payload.id}`)
            .then(() => {
                context.commit('eliminaviaggio', payload.indice);
            })
    }
};

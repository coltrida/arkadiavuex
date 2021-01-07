import help from '../../../helps.ts'
export default {
    loadlogs(context){
        axios.get(`${help().linklog}`)
            .then(response => {
                context.commit('loadlogs', response.data);
            })
    },
};

import help from '../../../helps.ts'
export default {
    login(context, payload){
        axios.post(`${help().linklogin}`, payload)
            .then(response => {
                context.commit('login', response.data);
            })
    },

    logout(context){
        context.commit('logout');
    }
};

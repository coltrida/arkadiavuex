import help from '../../../helps.ts'
export default {
    login(context, payload){
        axios.post(`${help().linklogin}`, payload)
            .then(response => {
                context.commit('login', response.data);
            }).catch(() => {
                context.commit('error', "Login fallito!")
        })
    },

    register(context, payload) {
        axios.post(`${help().linkregister}`, payload)
            .then(response => {
                context.commit('register', response.data)
            }).catch(() => {
                context.commit('error', "Registrazione fallita!")
        })
    },

    logout(context){
        context.commit('logout');
    },

};

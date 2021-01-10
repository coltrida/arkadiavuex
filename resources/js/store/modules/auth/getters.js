export default {
    isLogged(state) {
        return state.isLogged;
    },

    user(state) {
        return state.user;
    },

    role(state) {
        if(state.role == 1){
            return true
        } else {
            return false;
        }
    },

    user_id(state) {
        return state.user_id
    },

    error(state) {
        return state.error
    }
};

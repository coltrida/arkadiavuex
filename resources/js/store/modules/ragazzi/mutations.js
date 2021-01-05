export default {
    setRagazzi(state, payload) {
        state.ragazzi = payload;
    },

    inserisciragazzo(state, payload){
        state.ragazzi.unshift(payload)
    },

    eliminaragazzo(state, indice){
        state.ragazzi.splice(indice, 1)
    }
};

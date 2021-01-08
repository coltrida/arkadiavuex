<template>
    <div>
        <not-logged v-if="!isLogged"></not-logged>
        <logged v-else></logged>
    </div>
</template>

<script>
    import NotLogged from './NotLogged'
    import Logged from './Logged'
    export default {
        name: "HomePage",

        components: { NotLogged, Logged },

        computed:{
            isLogged(){
                return this.$store.getters['auth/isLogged']
            }
        },

        /*watch:{
            isLogged(){
                return this.$router.replace('/');
            }
        },*/
    }
</script>

<style>
    .link{
        text-decoration: none;
    }
</style>

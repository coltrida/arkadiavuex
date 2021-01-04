<template>
    <div style="margin-top: 40px">
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

        data(){
            return{
                isLogged: true
            }
        }
    }
</script>

<style scoped>

</style>

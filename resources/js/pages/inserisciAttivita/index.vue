<template>
    <v-container>
        <v-form @submit.prevent="inserisci">
            <v-text-field

                    label="Attività"
                    type="text"
                    required
            ></v-text-field>

            <v-text-field

                    label="costo"
                    type="number"
                    step="0.5"
                    required
            ></v-text-field>

            <v-select
                    :items="tipi"
                    label="Tipo"
            ></v-select>

            <router-link to="/register">
                <v-btn color="blue"> Inserisci </v-btn>
            </router-link>

        </v-form>

        <lista-attivita></lista-attivita>

    </v-container>
</template>

<script>
    import ListaAttivita from './ListaAttivita'
    export default {
        name: "index",

        components: {
            ListaAttivita
        },

        data(){
            return {
                tipi: ['Mensile', 'Giornaliero'],
            }
        },

        methods: {
            inserisci(){

            }
        }
    }
</script>

<style scoped>

</style>

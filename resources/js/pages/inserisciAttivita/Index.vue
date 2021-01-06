<template>
    <v-container>
        <h3 style="color: white">Inserisci Attività</h3>
        <v-form @submit.prevent="inserisci">
            <v-text-field
                    v-model="form.name"
                    label="Attività"
                    type="text"
                    required
                    dark
            ></v-text-field>

            <v-text-field
                    v-model="form.costo"
                    label="costo"
                    type="number"
                    step="0.5"
                    required
                    dark
            ></v-text-field>

            <v-select
                    v-model="form.tipo"
                    :items="tipi"
                    label="Tipo"
                    dark
            ></v-select>

            <v-btn
                    color="green"
                    type="submit"
                    :disabled = "canSend"
            >Inserisci</v-btn>

        </v-form>

        <lista-attivita style="margin-top:40px"></lista-attivita>

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
                tipi: ['Mensile', 'Orario'],
                form: {
                    name: '',
                    costo: '',
                    tipo: ''
                }
            }
        },

        computed:{
            canSend(){
                return !(this.form.name && this.form.costo && this.form.tipo)
            }
        },

        methods: {
            inserisci(){
                this.$store.dispatch('attivita/inserisciattivita', this.form).then(() => {
                    this.form.name = '';
                    this.form.costo = '';
                    this.form.tipo = '';
                })

            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <v-container>
        <h3 style="color: white">Inserisci Vettura</h3>
        <v-form @submit.prevent="inserisci">
            <v-text-field
                    v-model="form.name"
                    label="Vettura"
                    type="text"
                    required
                    dark
            ></v-text-field>

            <v-btn
                    color="green"
                    type="submit"
                    :disabled = "canSend"
            >Inserisci</v-btn>

        </v-form>

        <lista-vetture style="margin-top:40px"></lista-vetture>

    </v-container>
</template>

<script>
    import ListaVetture from './ListaVetture'
    export default {
        name: "Index",

        components: {
            ListaVetture,
        },

        data(){
            return {
                form: {
                    name: '',
                }
            }
        },

        computed:{
            canSend(){
                return !(this.form.name)
            }
        },

        methods: {
            inserisci(){
                this.$store.dispatch('vetture/inseriscivettura', this.form).then(() => {
                    this.form.name = '';
                })

            }
        }
    }
</script>

<style scoped>

</style>

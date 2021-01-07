<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Associa Operatore - Ore Settimanali</h3>
            <div>
                <router-link to="/associa" class="link">
                    <v-btn>
                        Indietro
                    </v-btn>
                </router-link>
            </div>
        </div>

        <v-form @submit.prevent="inserisci">
            <v-select
                    v-model="form.operatore"
                    :items="listaoperatori"
                    item-text="name"
                    item-value="id"
                    label="Operatori"
                    dark
            ></v-select>

            <v-text-field
                    v-model="form.ore"
                    label="Ore"
                    type="number"
                    step="0.5"
                    required
                    dark
            ></v-text-field>

            <v-btn
                    color="green"
                    type="submit"
                    :disabled="canSend"
            >Associa
            </v-btn>

        </v-form>

        <lista-associazioni style="margin-top:40px"></lista-associazioni>

    </v-container>
</template>

<script>
    import ListaAssociazioni from './ListaAssociazioni'

    export default {
        name: "index",

        components: {
            ListaAssociazioni,
        },

        created() {
            this.loadOperatori();
        },

        data() {
            return {
                form: {
                    operatore: '',
                    ore: ''
                },
            }
        },

        computed: {
            canSend() {
                return !(this.form.operatore && this.form.ore)
            },
            listaoperatori() {
                return this.$store.getters['operatori/operatori']
            },
        },

        methods: {
            inserisci() {
                this.$store.dispatch('operatori/inseriscioresettimanali', this.form).then(() => {
                    this.form.operatore = '';
                    this.form.ore = '';
                })
            },

            loadOperatori() {
                this.$store.dispatch('operatori/loadoperatori')
            },

        }
    }
</script>

<style scoped>

</style>

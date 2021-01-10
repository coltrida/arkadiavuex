<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Statistiche Presenze Operatori</h3>
            <div>
                <router-link to="/statistiche" class="link">
                    <v-btn>
                        Indietro
                    </v-btn>
                </router-link>
            </div>
        </div>

        <v-form @submit.prevent="cerca">
            <v-row>
                <v-col>
                    <v-select
                            v-model="form.operatore"
                            :items="listaoperatori"
                            item-text="name"
                            item-value="id"
                            label="Operatore"
                            dark

                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                            v-model="form.settimana"
                            :items="settimane"
                            item-text="testo"
                            item-value="id"
                            label="Settimana"
                            dark
                    ></v-select>
                </v-col>

            </v-row>

            <v-btn
                    color="green"
                    type="submit"
                    :disabled="canSend"
            >Cerca
            </v-btn>

        </v-form>

        <lista-statistiche style="margin-top:40px"></lista-statistiche>

    </v-container>
</template>

<script>
    import ListaStatistiche from './LIstaStatistiche'

    export default {
        name: "index",

        components: {
            ListaStatistiche,
        },

        created() {
            this.cleanStatisitche();
            this.loadOperatori();
            this.loadSettimane();
        },

        watch:{
            settimane(value){
                return this.form.settimana = value[this.settimanaAttuale]
            }
        },

        data() {
            return {
                form: {
                    operatore: '',
                    settimana: '',
                },
            }
        },

        computed: {
            canSend() {
                return !(this.form.operatore && this.form.settimana)
            },
            listaoperatori() {
                return this.$store.getters['operatori/operatori']
            },
            settimane() {
                return this.$store.getters['operatori/settimane']
            },
            settimanaAttuale() {
                return this.$store.getters['operatori/settimanaAttuale'] - 1
            },
        },

        methods: {
            cerca() {
                this.$store.dispatch('operatori/loadoperatore', this.form.operatore);
                this.$store.dispatch('operatori/loadstatisticheoperatori', this.form);
            },

            loadOperatori() {
                this.$store.dispatch('operatori/loadoperatori')
            },

            loadSettimane() {
                this.$store.dispatch('operatori/loadSettimane')
            },

            cleanStatisitche(){
                this.$store.commit('operatori/cleanstatistiche')
            }

        }
    }
</script>

<style scoped>

</style>

<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Statistiche Chilometri Vetture</h3>
            <div>
                <router-link to="/statistiche" class="link">
                    <v-btn>
                        Indietro
                    </v-btn>
                </router-link>
            </div>
        </div>

        <v-form @submit.prevent="cerca">
                <v-select
                        v-model="form.car"
                        :items="listavetture"
                        item-text="name"
                        item-value="id"
                        label="Vettura"
                        dark
                ></v-select>

            <v-row>
                <v-col
                        cols="6"
                        sm="2"
                        md="2"
                        v-for="n in 6" :key="n"
                >
                    <v-checkbox
                            v-model="form.mesi"
                            :label="String(n)"
                            color="primary"
                            :value="n"
                            hide-details
                            dark
                    ></v-checkbox>
                    <v-checkbox
                            v-model="form.mesi"
                            :label="String(n+6)"
                            color="primary"
                            :value="n+6"
                            hide-details
                            dark
                    ></v-checkbox>
                </v-col>

            </v-row>

            <v-select
                    v-model="form.anno"
                    :items="anni"
                    label="Anno"
                    dark
                    style="margin-top: 30px"
            ></v-select>

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
            this.loadVetture();
        },

        data() {
            return {
                form: {
                    car: '',
                    mesi: [],
                    anno: ''
                },
            }
        },

        computed: {
            canSend() {
                return !(this.form.car && this.form.anno && this.form.mesi.length > 0)
            },
            listavetture() {
                return this.$store.getters['vetture/vetture']
            },
            annoOggi(){
                return this.form.anno = new Date().getFullYear()
            },

            anni(){
                let valori = [];
                for(let i = 2020; i <= this.annoOggi; i++){
                    valori.push(i)
                }
                return valori
            },
        },

        methods: {
            cerca() {
                this.$store.dispatch('vetture/loadstatistiche', this.form);
            },

            loadVetture() {
                this.$store.dispatch('vetture/loadvetture')
            },

            cleanStatisitche(){
                this.$store.commit('vetture/cleanstatistiche')
            }

        }
    }
</script>

<style scoped>

</style>

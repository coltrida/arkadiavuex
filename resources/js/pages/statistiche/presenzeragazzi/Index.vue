<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Statistiche Presenze</h3>
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
                            v-model="form.ragazzo"
                            :items="listaragazzi"
                            item-text="name"
                            item-value="id"
                            label="Ragazzo"
                            dark
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                            v-model="form.mese"
                            :items="mesi"
                            label="Mese"
                            dark
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                            v-model="form.anno"
                            :items="anni"
                            label="Anno"
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
            this.loadRagazzi();
        },

        data() {
            return {
                form: {
                    mese: '',
                    anno: '',
                    ragazzo: ''
                },
            }
        },

        mounted(){
            this.form.mese = (new Date().getMonth()) + 1
        },

        computed: {
            canSend() {
                return !(this.form.mese && this.form.anno && this.form.ragazzo)
            },
            listaragazzi() {
                return this.$store.getters['ragazzi/ragazzi']
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

            mesi(){
                let valori = [];
                for(let i = 1; i <= 12; i++){
                    valori.push(i)
                }
                return valori
            }
        },

        methods: {
            cerca() {
                this.$store.dispatch('ragazzi/loadstatisticheattivitaragazzi', this.form)
                this.$store.dispatch('ragazzi/loadragazzo', this.form.ragazzo)
            },

            loadRagazzi() {
                this.$store.dispatch('ragazzi/loadragazzi')
            },

            cleanStatisitche(){
                this.$store.commit('ragazzi/cleanstatistiche')
            }

        }
    }
</script>

<style scoped>

</style>

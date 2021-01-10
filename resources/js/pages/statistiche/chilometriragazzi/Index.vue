<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Statistiche Chilometri Ragazzi</h3>
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
                    v-model="form.ragazzo"
                    :items="listaragazzi"
                    item-text="name"
                    item-value="id"
                    label="Ragazzo"
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
            this.loadRagazzi();
        },

        data() {
            return {
                form: {
                    ragazzo: '',
                    mesi: [],
                    anno: ''
                },
            }
        },

        computed: {
            canSend() {
                return !(this.form.ragazzo && this.form.anno && this.form.mesi.length > 0)
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
        },

        methods: {
            cerca() {
                this.$store.dispatch('ragazzi/loadstatistichekm', this.form);
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

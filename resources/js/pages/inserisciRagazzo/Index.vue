<template>
    <v-container>
        <h3 style="color: white">Inserisci Ragazzo</h3>
        <v-form @submit.prevent="inserisci">
            <v-text-field
                    v-model="form.name"
                    label="Ragazzo"
                    type="text"
                    required
                    dark
            ></v-text-field>

            <v-text-field
                    v-model="form.voucher"
                    label="voucher"
                    type="number"
                    step="0.5"
                    required
                    dark
            ></v-text-field>

            <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                            v-model="form.scadenza"
                            label="Scandeza Voucher"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            dark
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                        v-model="form.scadenza"
                        @input="menu2 = false"
                        locale="it"
                        :first-day-of-week="1"
                ></v-date-picker>
            </v-menu>

            <v-btn
                    color="green"
                    type="submit"
                    :disabled = "canSend"
            >Inserisci</v-btn>

        </v-form>

        <lista-ragazzi style="margin-top:40px"></lista-ragazzi>

    </v-container>
</template>

<script>
    import ListaRagazzi from './ListaRagazzi'
    export default {
        name: "Index",

        components: {
            ListaRagazzi,
        },

        data(){
            return {
                tipi: ['Mensile', 'Giornaliero'],

                menu2: false,
                form: {
                    name: '',
                    voucher: '',
                    scadenza: '',
                }
            }
        },

        computed:{
            canSend(){
                return !(this.form.name && this.form.voucher)
            }
        },

        methods: {
            inserisci(){
                this.$store.dispatch('ragazzi/inserisciragazzo', this.form).then(() => {
                    this.form.name = '';
                    this.form.voucher = '';
                    this.form.scadenza = '';
                })

            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <v-container>
        <h3 style="color: white">Inserisci Presenze</h3>
        <v-form @submit.prevent="inserisci">
            <!--<v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                            v-model="form.giorno"
                            label="Giorno"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            dark
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                        v-model="form.giorno"
                        @input="menu2 = false"
                        locale="it"
                        :first-day-of-week="1"
                ></v-date-picker>
            </v-menu>-->

            <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                            v-model="form.giorno"
                            label="Giorno"
                            prepend-icon="mdi-calendar"
                            readonly
                            dark
                            v-bind="attrs"
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                        v-model="form.giorno"
                        scrollable
                        locale="it"
                        :first-day-of-week="1"
                >
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                    >
                        OK
                    </v-btn>
                </v-date-picker>
            </v-dialog>

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
                    :disabled = "canSend"
            >Inserisci</v-btn>

        </v-form>

        <lista-presenze style="margin-top:40px"></lista-presenze>

    </v-container>
</template>

<script>
    import ListaPresenze from './ListaPresenze'
    export default {
        name: "Index",

        components: {
            ListaPresenze,
        },

        data(){
            return {
                modal: false,
                date: new Date().toISOString().substr(0, 10),
                menu2: false,
                form: {
                    user_id: this.$store.getters['auth/user_id'],
                    giorno: '',
                    ore: '',
                }
            }
        },

        computed:{
            canSend(){
                return !(this.form.giorno && this.form.ore)
            }
        },

        methods: {
            inserisci(){
                this.$store.dispatch('operatori/inseriscipresenza', this.form).then(() => {
                    this.form.giorno = '';
                    this.form.ore = '';
                })

            }
        }
    }
</script>

<style scoped>

</style>


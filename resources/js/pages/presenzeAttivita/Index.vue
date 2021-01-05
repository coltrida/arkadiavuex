<template>
    <v-container>
        <h3 style="color: white">Inserisci Dati</h3>
        <v-form @submit.prevent="inserisci">
            <v-select
                v-model="form.attivita"
                @change="attivitaSelezionata"
                :items="listaattivita"
                item-text="name"
                label="Attività"
                dark
        ></v-select>

            <v-autocomplete
                    v-model="form.ragazzi"
                    :disabled="isUpdating"
                    :items="people"
                    filled
                    chips
                    color="blue-grey lighten-2"
                    label="Select"
                    item-text="name"
                    item-value="name"
                    multiple
                    dark
            >
                <template v-slot:selection="data">
                    <v-chip
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            close
                            @click="data.select"
                            @click:close="remove(data.item)"
                    >
                        <v-avatar left>
                            <v-img :src="data.item.avatar"></v-img>
                        </v-avatar>
                        {{ data.item.name }}
                    </v-chip>
                </template>
                <template v-slot:item="data">
                    <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content v-text="data.item"></v-list-item-content>
                    </template>
                    <template v-else>
                        <v-list-item-avatar>
                            <img :src="data.item.avatar">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="data.item.name"></v-list-item-title>
                            <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </template>
            </v-autocomplete>

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
            </v-menu>

            <v-text-field
                    v-model="form.quantita"
                    label="Quantità"
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
        name: "index",

        components: {
            ListaPresenze
        },

        created() {
            this.loadAttivita();
            this.loadRagazzi();
        },

        data(){
            const srcs = {
                1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            }

            return {
                autoUpdate: true,
                friends: [],
                menu2: false,
                isUpdating: false,
                form: {
                    attivita: '',
                    giorno: '',
                    quantita: '',
                    ragazzi: []
                },
                name: 'Midnight Crew',
                /*people: [
                    { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
                    { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
                    { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
                    { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
                    { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
                    { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
                    { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
                    { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
                ],*/
                title: 'The summer breeze',

            }
        },

        computed:{
            canSend(){
                return !(this.form.name && this.form.costo && this.form.tipo)
            },
            listaattivita(){
                return this.$store.getters['attivita/attivita']
            },
            people(){
                return this.$store.getters['ragazzi/ragazzi']
            }
        },

        methods: {
            inserisci(){
                this.$store.dispatch('attivita/inserisciattivita', this.form).then(() => {
                    this.form.name = '';
                    this.form.costo = '';
                    this.form.tipo = '';
                })
            },

            loadAttivita(){
                this.$store.dispatch('attivita/loadattivita')
            },

            loadRagazzi(){
                this.$store.dispatch('ragazzi/loadragazzi')
            },

            remove (item) {
                const index = this.friends.indexOf(item.name)
                if (index >= 0) this.friends.splice(index, 1)
            },

            attivitaSelezionata(){
                alert('ciao')
            }
        }
    }
</script>

<style scoped>

</style>

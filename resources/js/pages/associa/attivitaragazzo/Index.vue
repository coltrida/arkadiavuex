<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Associa Attività - Ragazzo</h3>
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
                    v-model="form.attivita"
                    :items="listaattivita"
                    item-text="name"
                    item-value="id"
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
                    label="Ragazzi"
                    item-text="name"
                    item-value="id"
                    multiple
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
            this.loadAttivita();
            this.loadRagazzi();
        },

        data() {
            const srcs = {
                1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            }

            return {
                autoUpdate: true,
                menu2: false,
                isUpdating: false,
                form: {
                    attivita: '',
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

        computed: {
            canSend() {
                return !(this.form.attivita && this.form.ragazzi.length)
            },
            listaattivita() {
                return this.$store.getters['attivita/attivita']
            },
            people() {
                return this.$store.getters['ragazzi/ragazzi']
            }
        },

        methods: {
            inserisci() {
                this.$store.dispatch('associa/inserisciassociazione', this.form).then(() => {
                    this.form.attivita = '';
                    this.form.ragazzi = [];
                })
            },

            loadAttivita() {
                this.$store.dispatch('attivita/loadattivita')
            },

            loadRagazzi() {
                this.$store.dispatch('ragazzi/loadragazzi')
            },

            remove (item) {
                const index = this.form.ragazzi.indexOf(item.id)
                if (index >= 0) this.form.ragazzi.splice(index, 1)
            },

        }
    }
</script>

<style scoped>

</style>

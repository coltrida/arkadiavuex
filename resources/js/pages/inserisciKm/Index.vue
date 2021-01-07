<template>
    <v-container>
        <h3 style="color: white">Inserisci Km</h3>
        <v-form @submit.prevent="inserisci">
            <v-select
                    v-model="form.car"
                    :items="listavetture"
                    item-text="name"
                    item-value="id"
                    label="Vettura"
                    dark
            ></v-select>

            <v-text-field
                    v-model="form.kminiziali"
                    label="Km iniziali"
                    type="number"
                    required
                    dark
            ></v-text-field>

            <v-text-field
                    v-model="form.kmfinali"
                    label="Km finali"
                    type="number"
                    required
                    dark
            ></v-text-field>

            <v-select
                    v-model="form.utente"
                    :items="listaoperatori"
                    item-text="name"
                    item-value="id"
                    label="Operatore"
                    dark
            ></v-select>

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

            <v-autocomplete
                    v-model="form.raga"
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
                    :disabled = "canSend"
            >Inserisci</v-btn>

        </v-form>

        <lista-km style="margin-top:40px"></lista-km>

    </v-container>
</template>

<script>
    import ListaKm from './ListaKm'
    export default {
        name: "index",

        components: {
            ListaKm
        },

        data(){
            return {
                form: {
                    car: '',
                    kminiziali: '',
                    kmfinali: '',
                    utente: '',
                    raga: [],
                },
                menu2: false,
                isUpdating: false,
            }
        },

        created() {
            this.loadVetture();
            this.loadOperatori();
            this.loadRagazzi();
        },

        computed:{
            canSend(){
                return !(this.form.car && this.form.kminiziali && this.form.kmfinali && this.form.giorno && this.form.utente && this.form.raga.length)
            },
            listavetture() {
                return this.$store.getters['vetture/vetture']
            },
            listaoperatori() {
                return this.$store.getters['operatori/operatori']
            },
            people() {
                return this.$store.getters['ragazzi/ragazzi']
            },
        },

        methods: {
            inserisci(){
                this.$store.dispatch('viaggi/inserisciviaggio', this.form).then(() => {
                    this.form.car = '';
                    this.form.kminiziali = '';
                    this.form.kmfinali = '';
                    this.form.utente = '';
                    this.form.giorno = '';
                    this.form.raga = [];
                })

            },

            loadVetture() {
                this.$store.dispatch('vetture/loadvetture')
            },

            loadOperatori() {
                this.$store.dispatch('operatori/loadoperatori')
            },

            loadRagazzi() {
                this.$store.dispatch('ragazzi/loadragazzi')
            },

            remove(item) {
                const index = this.form.ragazzi.indexOf(item.id)
                if (index >= 0) this.form.ragazzi.splice(index, 1)
            },
        }
    }
</script>

<style scoped>

</style>

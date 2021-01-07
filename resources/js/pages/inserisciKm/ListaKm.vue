<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Vettura
                </th>
                <th class="text-left">
                    Km
                </th>
                <th class="text-left">
                    Operatore
                </th>
                <th class="text-left">
                    giorno
                </th>
                <th class="text-left">
                    Ragazzi
                </th>
                <th class="text-left">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in viaggi"
                    :key="item.id"
            >
                <td>{{ item.vettura }}</td>
                <td>{{ item.kmPercorsi }}</td>
                <td>{{ item.operatore }}</td>
                <td>{{ item.giorno }}</td>
                <td>
                    <v-dialog
                            v-model="dialog"
                            width="500"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="red lighten-2"
                                    dark
                                    small
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                Vedi
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title class="headline grey lighten-2">
                                Passeggeri
                            </v-card-title>

                            <v-card-text>
                                <v-list-item-group
                                        color="primary"
                                >
                                    <v-list-item
                                            v-for="(ele, i) in item.passeggeri"
                                            :key="i"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title v-text="ele.nome"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        text
                                        @click="dialog = false"
                                >
                                    chiudi
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </td>
                <td>
                    <v-btn small @click="delViaggio(item.id, index)" color="red">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        name: "ListaKm",

        data(){
            return{
                dialog: false,
            }
        },

        created() {
            this.loadViaggi();
        },

        computed:{
            viaggi(){
                return this.$store.getters['viaggi/viaggi']
            }

        },

        methods: {
            loadViaggi(){
                this.$store.dispatch('viaggi/loadviaggi')
            },

            delViaggio(id, indice){
                this.$store.dispatch('viaggi/eliminaviaggio', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

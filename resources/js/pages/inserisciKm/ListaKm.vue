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
                    <passeggeri :passeggeri="item.passeggeri"></passeggeri>
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
    import Passeggeri from './Passeggeri'
    export default {
        name: "ListaKm",

        components: { Passeggeri },

        data(){
            return{

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

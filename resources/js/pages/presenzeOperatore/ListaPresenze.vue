<template>
    <v-simple-table dark fixed-header
                    height="300px">
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left" style="background-color: #2e4623">
                    Giorno
                </th>
                <th class="text-left" style="background-color: #2e4623">
                    Ore
                </th>
                <th class="text-left" style="background-color: #2e4623">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in presenze"
                    :key="item.id"
            >
                <td>{{ item.giorno }}</td>
                <td>{{ item.ore }}</td>
                <td>
                    <v-btn @click="delPresenza(item.id, index)" color="red">
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
        name: "ListaPresenze",

        created() {
            this.loadPresenze();
        },

        computed:{
            presenze(){
                return this.$store.getters['operatori/presenze']
            }

        },

        methods: {
            loadPresenze(){
                this.$store.dispatch('operatori/loadpresenze', 1)
            },

            delPresenza(id, indice){
                this.$store.dispatch('operatori/eliminapresenza', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

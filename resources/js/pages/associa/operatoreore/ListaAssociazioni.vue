<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Nome
                </th>
                <th class="text-left">
                    Ore Settimanali
                </th>
                <th class="text-left">
                    Ore Saldo
                </th>
                <th class="text-left">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in operatori"
                    :key="item.id"
            >
                <td>{{ item.name }}</td>
                <td>{{ item.oresettimanali }}</td>
                <td>{{ item.oresaldo }}</td>
                <td>
                    <v-btn @click="delAssociazione(item.id, index)" color="red">
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
        name: "ListaAssociazioni",

        created() {
            this.loadAssociazioni();
        },

        computed:{
            operatori(){
                return this.$store.getters['operatori/operatori']
            }

        },

        methods: {
            loadAssociazioni(){
                this.$store.dispatch('operatori/loadoperatori')
            },

            delAssociazione(id, indice){
                this.$store.dispatch('associa/eliminaassociazione', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

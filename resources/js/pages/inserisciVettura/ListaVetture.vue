<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Nome Ragazzo
                </th>
                <th class="text-left">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in vetture"
                    :key="item.id"
            >
                <td>{{ item.name }}</td>
                <td>
                    <v-btn @click="delVettura(item.id, index)" color="red">
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
        name: "ListaVetture",

        created() {
            this.loadVetture();
        },

        computed:{
            vetture(){
                return this.$store.getters['vetture/vetture']
            }

        },

        methods: {
            loadVetture(){
                this.$store.dispatch('vetture/loadvetture')
            },

            delVettura(id, indice){
                this.$store.dispatch('vetture/eliminavettura', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Attivita'
                </th>
                <th class="text-left">
                    Ragazzo
                </th>
                <th class="text-left">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in associazioni"
                    :key="item.id"
            >
                <td>{{ item.attivita }}</td>
                <td>{{ item.ragazzo }}</td>
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
            associazioni(){
                return this.$store.getters['associa/associazioni']
            }

        },

        methods: {
            loadAssociazioni(){
                this.$store.dispatch('associa/loadassociazioni')
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

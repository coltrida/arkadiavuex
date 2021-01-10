<template>
    <v-simple-table dark fixed-header
                    height="300px">
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left" style="background-color: #2e4623">
                    Nome
                </th>
                <th class="text-left" style="background-color: #2e4623">
                    Giorno
                </th>
                <th class="text-left" style="background-color: #2e4623">
                    Attivita'
                </th>
                <th class="text-left" style="background-color: #2e4623">
                    Qta'
                </th>
                <th class="text-left" style="background-color: #2e4623">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in dati"
                    :key="item.id"
            >
                <td>{{ item.ragazzo }}</td>
                <td>{{ item.giorno }}</td>
                <td>{{ item.attivita }}</td>
                <td>{{ item.quantita }}</td>
                <td>
                    <v-btn @click="delAttivita(item.id, index)" color="red">
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
            this.loadAttivita();
        },

        computed:{
            dati(){
                return this.$store.getters['ragazzi/attivita']
            }

        },

        methods: {
            loadAttivita(){
                this.$store.dispatch('ragazzi/loadattivita')
            },

            delAttivita(id, indice){
                this.$store.dispatch('ragazzi/eliminaattivita', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

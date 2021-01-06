<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Nome
                </th>
                <th class="text-left">
                    Giorno
                </th>
                <th class="text-left">
                    Attivita'
                </th>
                <th class="text-left">
                    Qta'
                </th>
                <th class="text-left">

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

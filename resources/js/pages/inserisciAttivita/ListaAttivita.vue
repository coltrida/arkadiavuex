<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Nome Attività
                </th>
                <th class="text-left">
                    Tipo
                </th>
                <th class="text-left">
                    Costo
                </th>
                <th class="text-left">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in attivita"
                    :key="item.name"
            >
                <td>{{ item.name }} - {{item.id}} - {{index}}</td>
                <td>{{ item.tipo }}</td>
                <td>{{ item.costo }}</td>
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
        name: "ListaAttivita",

        created() {
            this.loadAttivita();
        },

        computed:{
            attivita(){
                return this.$store.getters['attivita/attivita']
            }

        },

        methods: {
            loadAttivita(){
                this.$store.dispatch('attivita/loadattivita')
            },

            delAttivita(id, indice){
                this.$store.dispatch('attivita/eliminaattivita', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

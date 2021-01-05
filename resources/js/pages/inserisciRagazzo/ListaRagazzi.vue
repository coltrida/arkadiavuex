<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr style="background-color: #2e4623">
                <th class="text-left">
                    Nome Ragazzo
                </th>
                <th class="text-left">
                    Voucher
                </th>
                <th class="text-left">
                    Scadenza Voucher
                </th>
                <th class="text-left">

                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(item, index) in ragazzi"
                    :key="item.id"
            >
                <td>{{ item.name }}</td>
                <td>{{ item.voucher }}</td>
                <td>{{ item.scadenza }}</td>
                <td>
                    <v-btn @click="delRagazzo(item.id, index)" color="red">
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
        name: "ListaRagazzi",

        created() {
            this.loadRagazzi();
        },

        computed:{
            ragazzi(){
                return this.$store.getters['ragazzi/ragazzi']
            }

        },

        methods: {
            loadRagazzi(){
                this.$store.dispatch('ragazzi/loadragazzi')
            },

            delRagazzo(id, indice){
                this.$store.dispatch('ragazzi/eliminaragazzo', {
                    id: id,
                    indice: indice
                })
            }
        }

    }
</script>

<style scoped>

</style>

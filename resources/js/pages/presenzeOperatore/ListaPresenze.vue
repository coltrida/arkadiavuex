<template>
    <div>

        <the-spinner v-if="isLoad"> </the-spinner>

        <v-simple-table v-else dark fixed-header
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
    </div>
</template>

<script>
    import TheSpinner from '../../layout/TheSpinner'

    export default {
        name: "ListaPresenze",

        components: {TheSpinner},

        created() {
            this.loadPresenze();
        },

        computed: {
            presenze() {
                return this.$store.getters['operatori/presenze']
            },

            user_id() {
                return this.$store.getters['auth/user_id']
            },

            isLoad() {
                return this.$store.getters['operatori/load']
            }

        },

        methods: {
            loadPresenze() {
                this.$store.dispatch('operatori/loadpresenze', this.user_id)
            },

            delPresenza(id, indice) {
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

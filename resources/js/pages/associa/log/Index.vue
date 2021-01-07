<template>
    <v-container>
        <div style="display: flex; justify-content: space-between">
            <h3 style="color: white">Logs</h3>
            <div>
                <router-link to="/associa" class="link">
                    <v-btn>
                        Indietro
                    </v-btn>
                </router-link>
            </div>
        </div>

        <v-simple-table dark style="margin-top: 30px">
            <template v-slot:default>
                <thead>
                <tr style="background-color: #2e4623">
                    <th class="text-left">
                        Data
                    </th>
                    <th class="text-left">
                        Tipologia
                    </th>
                    <th class="text-left">
                        Descrizione
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="(item, index) in logs"
                        :key="item.id"
                >
                    <td>{{ item.data }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    export default {
        name: "Index",
        created() {
            this.loadLogs();
        },

        computed: {
            logs() {
                return this.$store.getters['logs/logs']
            }

        },

        methods: {
            loadLogs() {
                this.$store.dispatch('logs/loadlogs')
            },
        }

    }
</script>

<style scoped>

</style>

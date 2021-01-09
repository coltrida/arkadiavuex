<template>
    <div>

        <v-simple-table dark>
            <template v-slot:default>
                <thead>
                <tr style="background-color: #2e4623">
                    <th class="text-left">
                        Giorno
                    </th>
                    <th class="text-left">
                        Ore
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="(ele) in statistiche"
                        :key="ele.id"
                >
                    <td>{{ ele.giorno }}</td>
                    <td>{{ ele.ore }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

        <section>
            <v-alert
                    color="blue-grey"
                    dark
            >
                Totale Ore: {{ totore }}
            </v-alert>
            <v-alert
                    color="blue accent-4"
                    dark
            >
                Saldo Ore: {{ operatore.oresaldo }}
            </v-alert>
        </section>

    </div>
</template>

<script>
    export default {
        name: "LIstaStatistiche",

        computed:{
            statistiche(){
                return this.$store.getters['operatori/statistiche']
            },

            totore(){
                return this.$store.getters['operatori/totore']
            },

            operatore(){
                return this.$store.getters['operatori/operatore']
            },

        },

    }
</script>

<style scoped>

</style>

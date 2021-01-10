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
                        km percorsi
                    </th>
                    <th class="text-left">
                        Operatore
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="(ele) in statistiche"
                        :key="ele.id"
                >
                    <td>{{ ele.giorno }}</td>
                    <td>{{ ele.kmPercorsi }}</td>
                    <td>{{ ele.operatore }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

        <section v-if="totale">
            <v-alert
                    color="blue-grey"
                    dark
            >
                Totale Ore: {{ totale }}
            </v-alert>
            <v-alert
                    color="blue-grey"
                    dark
            >
                Costo Totale: € {{ totale*0.45 }}
            </v-alert>
        </section>

    </div>
</template>

<script>
    export default {
        name: "LIstaStatistiche",

        computed:{
            statistiche(){
                return this.$store.getters['ragazzi/statistichekm']
            },

            totale(){
                return this.$store.getters['ragazzi/kmTotale']
            },

        },

    }
</script>

<style scoped>

</style>

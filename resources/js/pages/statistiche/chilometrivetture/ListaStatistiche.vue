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
                    <th class="text-left">
                        Passeggeri
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
                    <td><passeggeri :passeggeri="ele.passeggeri"></passeggeri></td>
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
        </section>

    </div>
</template>

<script>
    import Passeggeri from './Passeggeri'
    export default {
        name: "LIstaStatistiche",

        components: { Passeggeri },

        computed:{
            statistiche(){
                return this.$store.getters['vetture/statistiche']
            },

            totale(){
                return this.$store.getters['vetture/totale']
            },

        },

    }
</script>

<style scoped>

</style>

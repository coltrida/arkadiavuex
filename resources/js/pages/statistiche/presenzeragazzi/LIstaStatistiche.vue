<template>
    <div>
        <v-simple-table dark style="margin-bottom: 20px" v-for="(item) in statistiche"
                        :key="item.id">
            <template v-slot:default>
                <thead>
                <tr style="background-color: #2e4623">
                    <th class="text-left">
                        <div>
                            <h2>Attivita': {{ item[0].activity.name }} - {{ item[0].activity.tipo }}</h2>
                        </div>
                        <div>
                            Giorno
                        </div>
                    </th>
                    <th class="text-left">
                        Quantita'
                    </th>
                    <th class="text-left">
                        costo
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="(ele) in item"
                        :key="ele.id"
                >
                    <td>{{ ele.giorno }}</td>
                    <td>{{ ele.quantita }}</td>
                    <td>{{ele.costo}}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

        <section v-if="ragazzo">
            <v-alert
                    color="blue-grey"
                    dark
            >
                Costo Totale: {{ totale }}
            </v-alert>
            <v-alert
                    color="blue accent-4"
                    dark
            >
                Saldo Voucher: {{ ragazzo.voucher }}
            </v-alert>
        </section>

    </div>

</template>

<script>
    export default {
        name: "LIstaStatistiche",

        computed:{
            statistiche(){
                return this.$store.getters['ragazzi/statisticheattivita']
            },

            totale(){
                return this.$store.getters['ragazzi/costoTotale']
            },

            ragazzo(){
                return this.$store.getters['ragazzi/ragazzo'];
            }

        },

    }
</script>

<style scoped>

</style>

<template>
    <v-dialog
            v-model="dialog"
            width="500"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    color="red lighten-2"
                    dark
                    small
                    v-bind="attrs"
                    v-on="on"
            >
                Vedi
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="headline grey lighten-2">
                Passeggeri
            </v-card-title>

            <v-card-text>
                <v-list-item-group
                        color="primary"
                >
                    <v-list-item
                            v-for="(ele, i) in passeggeri"
                            :key="i"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="ele.nome"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                >
                    chiudi
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Passeggeri",

        props:['passeggeri'],

        data(){
            return{
                dialog: false,
            }
        }
    }
</script>

<style scoped>

</style>

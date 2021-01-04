<template>
    <v-item-group active-class="primary">
        <v-container>
            <v-row>
                <v-col
                        v-for="item in elementi"
                        :key="item.to"
                        cols="12"
                        md="3"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                        <v-card
                                class="d-flex align-center grey darken-3 fill-height { 'on-hover': hover }"
                                height="200"
                                @click="toggle"
                                dark
                                :elevation="hover ? 12 : 2"
                        >
                            <v-scroll-y-transition>
                                <div

                                        class="display-1 flex-grow-1 text-center"
                                >
                                    {{ item.name }}
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                        </v-hover>
                    </v-item>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                        v-for="item in elementi2"
                        :key="item.to"
                        cols="12"
                        md="3"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link :to="item.to">
                        <v-card
                                class="d-flex align-center grey darken-3 fill-height { 'on-hover': hover }"
                                height="200"
                                @click="toggle"
                                dark
                                :elevation="hover ? 12 : 2"
                        >
                            <v-scroll-y-transition>

                                    <div
                                            class="display-1 flex-grow-1 text-center" style="color: white; text-decoration: none"
                                    >
                                        {{ item.name }}
                                    </div>

                            </v-scroll-y-transition>
                        </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
    export default {
        name: "Logged",

        data(){
            return{
                elementi: [
                    {name: 'Presenze Attività', to: 'attivitaragazzi'},
                    {name: 'Presenze Operatori', to: 'presenzeoperatori'},
                    {name: 'Inserisci Km', to: 'inseriscikm'},
                    {name: 'Inserisci Vettura', to: 'inseriscivettura'},
                ],
                elementi2: [
                    {name: 'Inserisci Attività', to: 'inserisciattivita'},
                    {name: 'Inserisci Ragazzo', to: 'inserisciragazzo'},
                    {name: 'Statistiche', to: 'statistiche'},
                    {name: 'Associa e Log', to: 'associa'},
                ]
            }

        }
    }
</script>


<style scoped>
    .v-card {
        transition: opacity .4s ease-in-out;
    }

    .v-card:not(.on-hover) {
        opacity: 0.8;
    }

/*    .show-btns {
        color: rgba(255, 255, 255, 1) !important;
    }*/
</style>

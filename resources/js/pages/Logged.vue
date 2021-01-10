<template>
    <v-item-group active-class="primary" style="margin-top: 40px">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="3"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="attivitaragazzi" class="link">
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
                                    Presenze Attività
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
                <v-col
                        cols="12"
                        md="3"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="presenzeoperatori" class="link">
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
                                            Presenze Operatori
                                        </div>
                                    </v-scroll-y-transition>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
                <v-col
                        cols="12"
                        md="3"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="inseriscikm" class="link">
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
                                            Inserisci Km
                                        </div>
                                    </v-scroll-y-transition>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
                <v-col
                        cols="12"
                        md="3"
                        v-if="role"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="inseriscivettura" class="link">
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
                                            Inserisci Vettura
                                        </div>
                                    </v-scroll-y-transition>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                        cols="12"
                        md="3"
                        v-if="role"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="inserisciattivita" class="link">
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
                                            Inserisci Attività
                                        </div>
                                    </v-scroll-y-transition>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
                <v-col
                        cols="12"
                        md="3"
                        v-if="role"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="inserisciragazzo" class="link">
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
                                            Inserisci Ragazzo
                                        </div>
                                    </v-scroll-y-transition>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
                <v-col
                        cols="12"
                        md="3"
                        v-if="role"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="statistiche" class="link">
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
                                            Statistiche
                                        </div>
                                    </v-scroll-y-transition>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-item>
                </v-col>
                <v-col
                        cols="12"
                        md="3"
                        v-if="role"
                >
                    <v-item v-slot="{ active, toggle }">
                        <v-hover v-slot="{ hover }">
                            <router-link to="associa" class="link">
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
                                            Associa e Log
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


        computed:{
            role(){
                return this.$store.getters['auth/role']
            }
        },

        data(){
            return{
                elementi: [
                    {name: 'Presenze Attività', to: 'attivitaragazzi', show: true},
                    {name: 'Presenze Operatori', to: 'presenzeoperatori', show: true},
                    {name: 'Inserisci Km', to: 'inseriscikm', show: true},
                    {name: 'Inserisci Vettura', to: 'inseriscivettura', show: this.role},
                ],
                elementi2: [
                    {name: 'Inserisci Attività', to: 'inserisciattivita', show: this.role},
                    {name: 'Inserisci Ragazzo', to: 'inserisciragazzo', show: this.role},
                    {name: 'Statistiche', to: 'statistiche', show: this.role},
                    {name: 'Associa e Log', to: 'associa', show: this.role},
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

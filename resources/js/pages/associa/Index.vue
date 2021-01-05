<template>
    <v-item-group active-class="primary" style="margin-top:40px">
        <v-container>
            <v-row>
                <v-col
                        v-for="item in elementi"
                        :key="item.to"
                        cols="12"
                        md="4"
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

                                                class="display-1 flex-grow-1 text-center"
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
        name: "Index",

        data(){
            return{
                elementi: [
                    {name: 'Associa Attività - Ragazzo', to: 'associaattivitaragazzo'},
                    {name: 'Associa Operatore - Ore Settimanali', to: 'associaoreoperatore'},
                    {name: 'Log', to: 'log'},
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

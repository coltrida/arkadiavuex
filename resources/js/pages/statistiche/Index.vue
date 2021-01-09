<template>
    <v-item-group active-class="primary" style="margin-top:40px">
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
                            <router-link :to="item.to" class="link">
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
                    {name: 'Presenze Ragazzi', to: 'statistichepresenzeragazzi'},
                    {name: 'Presenze Operatori', to: 'statistichepresenzeoperatori'},
                    {name: 'Chilometri Vetture', to: 'statistichekmvetture'},
                    {name: 'Chilometri Ragazzi', to: 'statistichekmragazzi'},
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

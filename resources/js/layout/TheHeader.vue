<template>
    <v-card
            color="indigo"
    >
        <v-toolbar color="blue-grey darken-3"
                   dark>

            <router-link to="/" class="link">
                <v-toolbar-title>
                    <v-btn text>
                        Arkadia
                    </v-btn>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>

            <section v-if="user">
                <v-chip
                        pill
                >
                    <v-avatar left>
                        <v-img :src="foto"></v-img>
                    </v-avatar>
                    {{ user }}
                </v-chip>

                <v-btn @click="logout" text>
                    Logout
                </v-btn>
            </section>


            <section v-else>
                <router-link to="/login" class="link">
                    <v-btn text>
                        Login
                    </v-btn>
                </router-link>

                <router-link to="/register" class="link">
                    <v-btn text>
                        Registrati
                    </v-btn>
                </router-link>
            </section>


        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "TheHeader",

        computed: {
            user(){
                return this.$store.getters['auth/user']
            },

            foto(){
                return '/img/' + this.$store.getters['auth/user_id'] + '.jpg';
            },

            isLogged(){
                return this.$store.getters['auth/isLogged']
            }
        },

        methods:{
            logout(){
                this.$store.dispatch('auth/logout')
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .link{
        text-decoration: none;
    }
</style>

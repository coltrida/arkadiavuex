<template>
    <v-card
            color="indigo"
    >
        <v-toolbar color="blue-grey darken-3"
                   dark>

            <router-link to="/">
                <v-toolbar-title >
                    <v-btn text>
                    Arkadia
                </v-btn>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>

            <router-link to="/login">
                <v-btn text>
                    Login
                </v-btn>
            </router-link>

            <router-link to="/register">
                <v-btn text>
                    Registrati
                </v-btn>
            </router-link>

        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>

</style>

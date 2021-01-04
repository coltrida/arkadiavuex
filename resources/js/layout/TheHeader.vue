<template>
    <v-card
            color="indigo"
    >
        <v-toolbar color="indigo darken-4"
                   dark>

            <router-link to="/">
                <v-toolbar-title >Arkadia</v-toolbar-title>
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

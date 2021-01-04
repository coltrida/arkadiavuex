<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field

                    label="E-mail"
                    type="email"
                    required
            ></v-text-field>

            <v-text-field

                    label="Password"
                    type="password"
                    required
            ></v-text-field>

            <v-btn
                    color="green"
                    type="submit"
            >Login
            </v-btn>

            <router-link to="/register">
                <v-btn color="blue"> Registrati </v-btn>
            </router-link>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Login",

        methods: {
            login(){

            }
        }
    }
</script>

<style scoped>

</style>


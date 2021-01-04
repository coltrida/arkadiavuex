<template>
    <v-container>
        <v-form @submit.prevent="register">

            <v-text-field

                    label="Nome"
                    type="text"
                    required
            ></v-text-field>

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
            >Registrati
            </v-btn>

            <router-link to="/login">
                <v-btn color="blue"> Login </v-btn>
            </router-link>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Register",

        methods:{
            register(){

            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    type="email"
                    required
                    dark
            ></v-text-field>

            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    autocomplete="on"
                    required
                    dark
            ></v-text-field>

            <v-btn
                    color="green"
                    type="submit"
            >Login
            </v-btn>

            <v-alert
                    border="right"
                    color="red"
                    dark
                    v-if="error"
                    style="margin-top: 30px"
            >
                {{error}}
            </v-alert>

            <router-link to="/register">
                <v-btn color="blue"> Registrati </v-btn>
            </router-link>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Login",

        data(){
            return{
                cansend: false,
                form: {
                    email: '',
                    password: '',
                    error: ''
                }
            }
        },

        created(){
            this.clearLogin()
        },

        computed:{
            isLogged(){
                return this.$store.getters['auth/isLogged']
            },

            error(){
                return this.$store.getters['auth/error']
            },

        },

        watch:{
            isLogged(){
                return this.$router.replace('/');
            }
        },

        methods: {
            login(){
                this.$store.dispatch('auth/login', this.form);
            },

            clearLogin(){
                this.$store.commit('auth/clear')
            }
        }
    }
</script>

<style scoped>

</style>


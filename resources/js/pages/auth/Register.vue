<template>
    <v-container>
        <v-form @submit.prevent="register">

            <v-text-field
                    v-model="form.name"
                    label="Nome"
                    type="text"
                    required
                    dark
            ></v-text-field>

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
                    required
                    autocomplete="on"
                    dark
            ></v-text-field>

            <v-text-field
                    v-model="form.password_confirm"
                    label="Ripeti Password"
                    type="password"
                    required
                    autocomplete="on"
                    dark
            ></v-text-field>

            <v-btn
                    color="green"
                    type="submit"
            >Registrati
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

            <router-link to="/login">
                <v-btn color="blue"> Login </v-btn>
            </router-link>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Register",

        data(){
            return{
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirm: ''
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

        methods:{
            register(){
                this.$store.dispatch(`auth/register`, this.form)
            },

            clearLogin(){
                this.$store.commit('auth/clear')
            }
        }
    }
</script>

<style scoped>

</style>

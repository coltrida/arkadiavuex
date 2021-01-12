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

            <section v-if="!isLogged">
                <v-btn
                        color="green"
                        type="submit"
                >Login
                </v-btn>
                <router-link to="/register">
                    <v-btn color="blue"> Registrati </v-btn>
                </router-link>
            </section>



            <v-alert
                    border="right"
                    color="red"
                    dark
                    v-if="error"
                    style="margin-top: 30px"
            >
                {{error}}
            </v-alert>

        </v-form>
    </v-container>
</template>

<script>
    import TheSpinner from '../../layout/TheSpinner'
    export default {
        name: "Login",

        components: { TheSpinner },

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
                //return true
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
                //this.isLoad = true;
                this.$store.dispatch('auth/login', this.form)
                    .then();
            },

            clearLogin(){
                this.$store.commit('auth/clear')
            }
        }
    }
</script>

<style scoped>

</style>


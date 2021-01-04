import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Attivita from "../pages/inserisciAttivita";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/inserisciattivita', component: Attivita },
    { path: '/:notFound(.*)', component: HomePage }
]


const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router

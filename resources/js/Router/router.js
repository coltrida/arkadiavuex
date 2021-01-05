import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Attivita from "../pages/inserisciAttivita/Index";
import Ragazzo from "../pages/inserisciRagazzo/Index";
import Vettura from "../pages/inserisciVettura/Index";
import PresenzeOperatore from "../pages/presenzeOperatore/Index";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/inserisciattivita', component: Attivita },
    { path: '/inserisciragazzo', component: Ragazzo },
    { path: '/inseriscivettura', component: Vettura },
    { path: '/presenzeoperatori', component: PresenzeOperatore },
    { path: '/:notFound(.*)', component: HomePage }
]


const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router

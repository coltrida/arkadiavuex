import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Attivita from "../pages/inserisciAttivita/Index";
import Ragazzo from "../pages/inserisciRagazzo/Index";
import Vettura from "../pages/inserisciVettura/Index";
import Chilometri from "../pages/inserisciKm/Index";
import PresenzeOperatore from "../pages/presenzeOperatore/Index";
import PresenzeAttivita from "../pages/presenzeAttivita/Index";
import Associa from "../pages/associa/Index";
import Statistiche from "../pages/statistiche/Index";
const AssociaAttivitaRagazzo = () => import('../pages/associa/attivitaragazzo/Index');
const AssociaOperatoreOre = () => import('../pages/associa/operatoreore/Index');
const Log = () => import('../pages/associa/log/Index');
const StatKmragazzi = () => import('../pages/statistiche/chilometriragazzi/Index');
const StatKmvetture = () => import('../pages/statistiche/chilometrivetture/Index');
const Statpresenzeoperatori = () => import('../pages/statistiche/presenzeoperatori/Index');
const Statpresenzeragazzi = () => import('../pages/statistiche/presenzeragazzi/Index');
import store from '../store/index'

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/inserisciattivita', component: Attivita, meta: { requiresAuth: true }},
    { path: '/inserisciragazzo', component: Ragazzo, meta: { requiresAuth: true } },
    { path: '/inseriscivettura', component: Vettura, meta: { requiresAuth: true } },
    { path: '/inseriscikm', component: Chilometri, meta: { requiresAuth: true } },
    { path: '/presenzeoperatori', component: PresenzeOperatore, meta: { requiresAuth: true } },
    { path: '/attivitaragazzi', component: PresenzeAttivita, meta: { requiresAuth: true } },
    { path: '/associa', component: Associa, meta: { requiresAuth: true } },
    { path: '/statistiche', component: Statistiche, meta: { requiresAuth: true } },
    { path: '/associaattivitaragazzo', component: AssociaAttivitaRagazzo, meta: { requiresAuth: true } },
    { path: '/associaoreoperatore', component: AssociaOperatoreOre, meta: { requiresAuth: true } },
    { path: '/log', component: Log, meta: { requiresAuth: true } },
    { path: '/statistichekmragazzi', component: StatKmragazzi, meta: { requiresAuth: true } },
    { path: '/statistichekmvetture', component: StatKmvetture, meta: { requiresAuth: true } },
    { path: '/statistichepresenzeoperatori', component: Statpresenzeoperatori, meta: { requiresAuth: true } },
    { path: '/statistichepresenzeragazzi', component: Statpresenzeragazzi, meta: { requiresAuth: true } },
    { path: '/:notFound(.*)', component: HomePage }
]


const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters['auth/isLogged']) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router

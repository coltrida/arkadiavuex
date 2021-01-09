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

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/inserisciattivita', component: Attivita },
    { path: '/inserisciragazzo', component: Ragazzo },
    { path: '/inseriscivettura', component: Vettura },
    { path: '/inseriscikm', component: Chilometri },
    { path: '/presenzeoperatori', component: PresenzeOperatore },
    { path: '/attivitaragazzi', component: PresenzeAttivita },
    { path: '/associa', component: Associa },
    { path: '/statistiche', component: Statistiche },
    { path: '/associaattivitaragazzo', component: AssociaAttivitaRagazzo },
    { path: '/associaoreoperatore', component: AssociaOperatoreOre },
    { path: '/log', component: Log },
    { path: '/statistichekmragazzi', component: StatKmragazzi },
    { path: '/statistichekmvetture', component: StatKmvetture },
    { path: '/statistichepresenzeoperatori', component: Statpresenzeoperatori },
    { path: '/statistichepresenzeragazzi', component: Statpresenzeragazzi },
    { path: '/:notFound(.*)', component: HomePage }
]


const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router

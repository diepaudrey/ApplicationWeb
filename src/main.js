import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'

import Accueil from "./pages/Accueil.vue"
import Maps from "./pages/Maps.vue"
import Weapons from "./pages/Weapons.vue"


const routes = [
    { path: '/', component: Accueil, name: "homepage"},
    { path: '/maps', component : Maps, name: "maps"},
    { path: '/weapons', component : Weapons, name: "weapons"}
]

const router = VueRouter.createRouter({
    history : VueRouter.createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import view01 from '../views/ComponentView/view01'
import keyboard from '../views/ComponentView/keyBoard'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'view01',
        component: view01
    },
    {
        path: '/keyboard',
        name: 'keyboard',
        component: keyboard
    }
]

const router = new VueRouter({
    routes
})

export default router
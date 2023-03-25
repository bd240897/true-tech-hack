import {createRouter, createWebHistory} from 'vue-router'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Third from '../views/Third.vue'
import temp from '../views/temp.vue'


const routes = [
    {
        path: '/first-screen',
        name: 'First',
        component: First
    },
    {
        path: '/second-screen/:id',
        name: 'Second',
        component: Second
    },
    {
        path: '/third-screen/',
        name: 'Third',
        component: Third
    },
    {
        path: '/temp/',
        name: 'temp',
        component: temp
    },
]

const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL
    routes
})

export default router

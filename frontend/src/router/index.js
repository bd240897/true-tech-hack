import {createRouter, createWebHistory} from 'vue-router'
import FilmsList from '../views/FilmsList.vue'
import FilmVideo from '../views/FilmVideo.vue'

const routes = [
    {
        path: '/',
        name: 'FilmsList',
        component: FilmsList
    },
    {
        path: '/video/:id',
        name: 'FilmVideo',
        component: FilmVideo
    },
]

const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL
    routes
})

export default router

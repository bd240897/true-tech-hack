import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MainView from '../views/MainView.vue'
import QuickStartView from '../views/QuickStartView.vue'
import CreateProfileView from '../views/CreateProfileView.vue'
import ProfileView from "@/views/ProfileView";
import ResultView from "@/views/ResultView";
import TestView from "@/views/TestView";
import DoctorsView from "@/views/DoctorsView";
import TeamView from "@/views/TeamView";


const routes = [
    {
        path: '/',
        name: 'MainView',
        component: MainView
    },
    {
        path: '/first-screen',
        name: 'LoginView',
        component: LoginView
    },

    // TODO delete
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView
    },
    {
        path: '/profile/create',
        name: 'CreateProfileView',
        component: CreateProfileView
    },
    {
        path: '/profile',
        name: 'ProfileView',
        component: ProfileView
    },
    {
        path: '/quick',
        name: 'QuickStartView',
        component: QuickStartView
    },
    {
        path: '/photo/result',
        name: 'ResultView',
        component: ResultView
    },
    {
        path: '/doctors',
        name: 'DoctorsView',
        component: DoctorsView
    },
    {
        path: '/team',
        name: 'TeamView',
        component: TeamView
    },
    {
        path: '/test',
        name: 'TestView',
        component: TestView
    },
]

const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL
    routes
})

export default router

import Vue from "vue";
import Router from "vue-router";
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Register from '../views/Register'
import Experiences from '../views/Experiences'

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/experiences",
        name: "experiences",
        component: Experiences,
    },
];
const router = new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
router.beforeEach((to, from, next) => {
    
    if (to.name !== 'login' && !localStorage.getItem('isAuthenticated')) next({ name: 'login' })
    else next()
  })
export default router;

// export default new Router({
//     base: process.env.BASE_URL,
//     routes: [
//         { 
//             path: "/",
//             name: "login",
//             component: Login,
//         }
//     ]
// })

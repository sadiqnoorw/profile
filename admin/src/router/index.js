import Vue from "vue";
import Router from "vue-router";
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Register from '../views/Register'

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
];
const router = new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
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

import VueRouter from 'vue-router'

import Home from '../pages/Home/Home';
import AllThemes from "../pages/AllThemes/AllThemes";
import Theme from "../pages/Theme/Theme";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account/Account";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '/themes',
            component: AllThemes
        },
        {
            path: '/theme',
            component: Theme
        },
        {
            path: '/*',
            component: NotFound
        },
    ]
})
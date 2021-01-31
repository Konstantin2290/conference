import VueRouter from 'vue-router'

import Home from '../pages/Home';
import AllThemes from "../pages/AllThemes";
import Theme from "../pages/Theme";
import NotFound from "../pages/NotFound";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
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
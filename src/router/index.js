import VueRouter from 'vue-router'

import Home from '../pages/Home/Home';
import AllThemes from "../pages/AllThemes/AllThemes";
import Theme from "../pages/Theme/Theme";
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
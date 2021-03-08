import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    routes: [{
        path:'/',
        redirect:'/props-emit-v-model'
    },
        {
            path: '/props-emit-v-model',
            component: () => import('../components/props-$emit-v-model/index.vue'),
        },
        {
            path: '/childre-parent',
            component: () => import('../components/$childre-$parent/index.vue'),
        },
        {
            path: '/eventBus',
            component: () => import('../components/eventBus/index.vue'),
        },
        {
            path: '/provide-inject',
            component: () => import('../components/provide-inject/index.vue'),
        },
        {
            path: '/attrs-listeners',
            component: () => import('../components/$attrs-$listeners/index.vue'),
        },
        {
            path: '/ref',
            component: () => import('../components/$ref/index.vue'),
        }
    ]
})
export default router
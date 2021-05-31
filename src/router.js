import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },    
    {
        path: '/products',
        name: 'products',
        component: () => import('./views/Products.vue')
    },
    {
        path: '/products/:productVideo',
        name: 'productVideo',
        component: () => import('./components/products/productVideo.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./components/products/cart/CartProducts.vue')
        
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import('./components/products/cart/Checkout.vue'),
        
    },
    {
        path: '/handtools',
        name: 'handtools',
        component: () => import('./components/products/Handtools'),
        
    },
    {
        path: '/outdoor',
        name: 'outdoor',
        component: () => import('./components/products/Outdoor'),
        
    },
    {
        path: '/gear',
        name: 'gear',
        component: () => import('./components/products/GearsRepairs'),
        
    }
    
    ]
})

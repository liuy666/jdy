import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = (resolve) => require.ensure([],() => resolve(require('@/pages/Index.vue')),'index');
const Product = (resolve) => require.ensure([],() => resolve(require('@/pages/Product.vue')),'product');
const About = (resolve) => require.ensure([],() => resolve(require('@/pages/About.vue')),'about');
const Join = (resolve) => require.ensure([],() => resolve(require('@/pages/Join.vue')),'join');
const Face = (resolve) => require.ensure([],() => resolve(require('@/pages/Face.vue')),'face');
const People = (resolve) => require.ensure([],() => resolve(require('@/pages/People.vue')),'people');

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },{
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/join',
            name: 'Join',
            component: Join
        },
        {
            path: '/face',
            name: 'Face',
            component: Face
        },
        {
            path: '/people',
            name: 'People',
            component: People
        }
    ]
})

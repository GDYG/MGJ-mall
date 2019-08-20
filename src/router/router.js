import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('../views/home/Home');
const Cart = () => import ('../views/carts/Cart');
const Category = () => import ('../views/category/Category');
const Profile = () => import ('../views/profile/Profile');


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

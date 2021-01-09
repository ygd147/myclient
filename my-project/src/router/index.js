import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/index',
    name: 'Home',
    component: () => import("../views/Main.vue")
  },
  {
      path: '/',
      name: 'Login',
      component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router

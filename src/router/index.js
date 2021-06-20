import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
import Hero from '../views/Hero.vue'
import Project from '../views/Project.vue'
import Skills from '../views/Skills.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/hero',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import HeroesPage from "../pages/HeroesPage.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Heroes",
    component: HeroesPage
  },
  {
    path: "/apod",
    name: "APOD",
    component: () => import("../pages/ApodPage.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../pages/AboutPage.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router

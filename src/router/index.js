import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App"
import Recommend from "@/components/recommend/recommend"
import Rank from "@/components/rank/rank"
import Search from "@/components/search/search"
import Singer from "@/components/singer/singer"
import Tab from "@/components/tab/tab"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component:Recommend
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/components/recommend/recommend')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  },
  {
    path: '/tab',
    name: 'Tab',
    component: Tab
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

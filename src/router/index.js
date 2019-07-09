import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/Blog', name: 'feed', component: 'Blog' },
  { path: '/by/:author', name: 'author', props: true, component: 'Blog' },
  { path: '/read/:post', name: 'post', props: true, component: 'Blog' },
  { path: '/Portfolio', name: 'feeds', component: 'Portfolio' },
  { path: '/portfolio/by/:author', name: 'authors', props: true, component: 'Portfolio' },
  { path: '/portfolio/read/:post', name: 'posts', props: true, component: 'Portfolio' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

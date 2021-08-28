import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('../layouts/' + layout + '.vue')
})

routes.push(
  {
    path: '*',
    redirect: '/404',
    name: 'notFound',
    meta: {
      enableBack: false
    }
  }
)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router

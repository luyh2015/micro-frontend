import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const NAME = 'home'
router.afterEach((to, from) => {
		window.routers.forEach(item => {
			if (item.name !== NAME) {
				item.router.push({path: to.fullPath})
			}
		})
})


if (window.routers) {
	window.routers.push({name: NAME, router})
} else {
	window.routers = [{name: NAME, router}]
}


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

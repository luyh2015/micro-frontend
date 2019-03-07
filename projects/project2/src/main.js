// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 
const NAME = 'project2'
router.afterEach((to, from) => {
	window.routers.forEach(item => {
		if (item.name !== NAME) {
			item.router.push(to.fullPath)				
		}
	})
})

if (window.routers) {
	window.routers.push({name: NAME, router})  
} else {
	window.routers = [{name: NAME, router}]
}

/* eslint-disable no-new */
new Vue({
  el: '#project2',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
// @ => ../    !!!
import HelloWorld from '../components/HelloWorld'
import HelloChildren from '../components/HelloChildren'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/project1',
      component: HelloWorld,
      children: [
      	{
      		path: 'hello-project1',
      		name: 'HelloChildren',
		      component: HelloChildren
      	}
      ]
    }
  ]
})

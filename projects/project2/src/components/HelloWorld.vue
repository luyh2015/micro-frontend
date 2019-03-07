<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      <router-link to="/project1">go to project1</router-link>
    </p>
    <app-footer></app-footer>
    <router-view></router-view>

  </div>
</template>

<script>
import appFooter from './appFooter';
export default {
  name: 'HelloWorld',
  components: {
    appFooter
  },
  data () {
    return {
      msg: 'this is project2'
    }
  }
}
</script>


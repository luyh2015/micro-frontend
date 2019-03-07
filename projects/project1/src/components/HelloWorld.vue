<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      <router-link to="/project2">go to project2</router-link>
    </p>
    <!-- <router-view></router-view> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from '../../../project2/src/components/appFooter';
export default {
  name: 'HelloWorld',
  components: {
    appFooter
  },
  data () {
    return {
      msg: 'this is project1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

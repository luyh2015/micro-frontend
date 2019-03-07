<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>
      <router-link to="/project2">back to father -> project2</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloChildren',
  data () {
    return {
      msg: 'project2 - children'
    }
  }
}
</script>
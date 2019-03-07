<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>
      <router-link to="/project1">back to father -> project1-1</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloChildren',
  data () {
    return {
      msg: 'project1 - children'
    }
  }
}
</script>

<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '版权所有@爱云校(project2的组件)'
    }
  }
}
</script>
<style scoped>
div {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 100px;
  font-size: 18px;
}
</style>

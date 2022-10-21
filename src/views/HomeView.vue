<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld class="a" msg="Welcome to Your Vue.js App" />
    <div class="a"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0 0 0 / 0.45);
  flex-direction: column;
}
</style>

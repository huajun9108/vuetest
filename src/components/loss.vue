<style scoped>
#loss{
  width: 95%;
  height: 100vh;
}
#lossReuseableMenu{
  padding: 20px;
}
</style>
<template>
  <div id="loss">
    <div id="lossReuseableMenu">
    <ReuseableMenu default="machine" type="loss"></ReuseableMenu>
    </div>
    <div id="lossContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import ReuseableMenu from '../components/ReuseableMenu.vue'
  export default{
  name: 'loss',
  components: {ReuseableMenu},
  data() {
  return {
    value: 'machine'
    }
  },
  mounted: function () {
  }
}
</script>

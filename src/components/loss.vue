<style>
  #lossContainer{
    padding:20px;
  }
</style>

<template>
  <div id="loss">
    <ReuseableMenu default="machine" type="loss"></ReuseableMenu>
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

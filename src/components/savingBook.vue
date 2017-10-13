<style  scoped>
  #book{
  width: 95%;
  height: 100vh;
  }
  #bookReuseableMenu{
    padding: 20px;
  }
</style>

<template>
  <div id="book">
    <div id="bookReuseableMenu">
      <ReuseableMenu default="machineBook" type="savingBook"></ReuseableMenu>
    </div>
    <div id="bookContainer">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import ReuseableMenu from '../components/ReuseableMenu.vue'
    export default{
      name: 'savingBook',
      components: {ReuseableMenu},
    }
</script>

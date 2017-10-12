<style  scoped>
  #book{
    padding: 20px;
  }
  #bookContainer{
    padding:20px 0px;
  }
</style>

<template>
  <div id=book>
    <ReuseableMenu default="machineBook" type="savingBook"></ReuseableMenu>
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

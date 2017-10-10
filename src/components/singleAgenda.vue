<style  scoped>
  #agendaContainer{
    padding:20px 0px;
  }
</style>

<template>
  <div>
    <ReuseableMenu default="machineAgenda" type="singleAgenda"></ReuseableMenu>
    <div id="agendaContainer">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import ReuseableMenu from '../components/ReuseableMenu.vue'
    export default{
      name: 'singleAgenda',
      components: {ReuseableMenu},
    }
</script>

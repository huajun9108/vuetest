<style  scoped>
#agenda{
  padding: 20px;
}
  #agendaContainer{
    padding:20px 0px;
  }
</style>

<template>
  <div id=agenda>
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

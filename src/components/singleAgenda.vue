<style  scoped>
#agenda{
  width: 95%;
  height: 100vh;
}
#agendaReuseableMenu{
  padding: 20px;
}
#agenda-machine-hr{
  padding-left: 20px;
  padding-bottom: 20px;
}
</style>

<template>
  <div id="agenda">
    <div id="agendaReuseableMenu">
    <ReuseableMenu default="machineAgenda" type="singleAgenda"></ReuseableMenu>
    </div>
    <div id="agenda-machine-hr">
      <hr>
    </div>
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

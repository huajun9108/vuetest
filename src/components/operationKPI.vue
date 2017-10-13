<style  scoped>
#kpi{
  width: 95%;
  height: 100vh;
}
#kpiReuseableMenu{
  padding: 20px;
}
</style>

<template>
  <div id="kpi">
    <div id="kpiReuseableMenu">
    <ReuseableMenu default="machineKPI" type="operationKPI"></ReuseableMenu>
  </div>
    <div id="kpiContainer">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import ReuseableMenu from '../components/ReuseableMenu.vue'
    export default{
      name: 'operationKPI',
      components: {ReuseableMenu},
    }
</script>

<style  scoped>
#kpi{
  padding: 20px;
}
  #kpiContainer{
    padding:20px 0px;
  }
</style>

<template>
  <div id="kpi">
    <ReuseableMenu default="machineKPI" type="operationKPI"></ReuseableMenu>
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

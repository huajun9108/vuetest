<style scoped>
label.ivu-radio-wrapper.ivu-radio-group-item{
    border-style: none;
}
label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked{
  background-color: #0084c8;
  color: white;
  border-color: #0084c8;
  box-shadow:-1px 0 0 0  #0084c8;
  border-radius: 2em;
}
#machineKpiMenu{
  padding-left: 20px;
  padding-bottom: 20px;
}
</style>

<template>
  <div id="machineKPI">
    <div id="machineKpiMenu">
    <hr>
    <br />
    <RadioGroup v-model="value" type="button" @on-change="change()">
      <Radio label="breakdown" value="breakdown"></Radio>
      <Radio label="short stops" value="short stops"></Radio>
    </RadioGroup>
  </div>
  <div id="machineKPIContainer">
    <router-view></router-view>
  </div>
    </div>
</template>

<script>
export default{
  name: 'machineKPI',
  data() {
    return {
      value: 'breakdown'
    }
  },
  methods: {
    change: function () {
      this.$router.push(`/operationKPI/machineKPI/${this.value}`)
    }
  },
  mounted: function () {
  }
}
</script>

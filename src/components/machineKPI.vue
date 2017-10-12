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
</style>

<template>
  <div id="machineKPI">
    <hr>
    <br />
    <RadioGroup v-model="value" type="button" @on-change="change()">
      <Radio label="breakdown" value="breakdown"></Radio>
      <Radio label="short stops" value="short stops"></Radio>
    </RadioGroup>

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

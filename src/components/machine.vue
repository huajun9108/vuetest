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
#machineContainer{
  background-color: lightgray;
}
</style>

<template>
  <div id="machine">
    <hr>
    <br />
    <RadioGroup v-model="value" type="button" @on-change="change()">
      <Radio label="overview" value="overview"></Radio>
      <Radio label="oEE no losses" value="oEE no losses"></Radio>
      <Radio label="grafico OEE" value="grafico OEE"></Radio>
    </RadioGroup>
    <div id="machineContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'machine',
    data() {
      return {
        value: 'overview'
      }
    },
    methods: {
      change: function () {
        this.$router.push(`/loss/machine/${this.value}`)
      },
    },
    mounted: function () {
    }
  }
</script>

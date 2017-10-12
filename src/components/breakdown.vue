<style scoped>
label.ivu-radio-wrapper.ivu-radio-group-item{
  background-color: #ddd;
  color: white;
}
label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked{
  background-color: #ff8b8b;
  color: white;
  border-left-color: #ff8b8b;
  border-top-color: #ff8b8b;
  border-bottom-color: #ff8b8b;
  border-right-color: #ff8b8b;
  box-shadow:-1px 0 0 0  #ff8b8b;
}
</style>

<template>
  <div id="breakdown">
    <br />
    <RadioGroup v-model="value" type="button" @on-change="change()" size="small">
      <Radio label="list" value="list"></Radio>
      <Radio label="pare to chat" value="pare to chat"></Radio>
    </RadioGroup>
    <div id="breakdownContainer">
    <br />
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default{
  name: 'breakdown',
  data() {
    return {
      value: 'list'
    }
  },
  methods: {
    change: function () {
      this.$router.push(`/operationKPI/machineKPI/breakdown/${this.value}`)
    }
  },
  mounted: function () {
  }
}
</script>

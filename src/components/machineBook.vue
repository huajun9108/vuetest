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
  <div id="machineBook">
    <hr>
    <br />
    <RadioGroup v-model="value" type="button" @on-change="change()">
      <Radio label="savings" value="savings"></Radio>
      <Radio label="masterplan" value="masterplan"></Radio>
    </RadioGroup>

  <div id="machineBookContainer">
    <router-view></router-view>
  </div>
    </div>
</template>

<script>
export default{
  name: 'machineBook',
  data() {
    return {
      value: 'savings'
    }
  },
  methods: {
    change: function () {
      this.$router.push(`/savingBook/machineBook/${this.value}`)
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="breakdown">
    <RadioGroup v-model="value" type="button" @on-change="change()">
      <Radio label="list" value="list"></Radio>
      <Radio label="pare to chat" value="pare to chat"></Radio>
    </RadioGroup>

  <div id="breakdownContainer">
    <router-view></router-view>
  </div>
    </div>
</template>

<script>
export default{
  name: 'breakdown',
  data() {
    return {
      value: ''
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

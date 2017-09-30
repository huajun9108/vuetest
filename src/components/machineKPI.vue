<style scoped>

</style>

<template>
  <div id="machineKPI">
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
      value: ''
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

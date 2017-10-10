<style scoped>

</style>

<template>
  <div id="machineBook">
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
      value: ''
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

<style scoped>
  #machine {
  }

  #machineContainer {
    padding: 20px 0px;
  }
</style>

<template>
  <div id="machine">
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
        value: ''
      }
    },
    methods: {
      change: function () {
        this.$router.push(`/loss/machine/${this.value}`)
      }
    },
    mounted: function () {
    }
  }
</script>

<style scoped>
</style>

<template>
  <RadioGroup v-model="value" type="button" @on-change="change()">
    <Radio v-for="item in radio" :label="item.label" >{{item.key}}</Radio>
  </RadioGroup>
</template>

<script>
  export default {
    name: 'ReuseableMenu',
    data(){
      return {
        radio: [],
        value: ''
      }
    },
    props: {
      type: {
        required: true
      },
      default: {
        required: true
      }
    },
    methods: {
      change: function () {
        this.$router.push(`/loss/${this.value}`);
      }
    },
    mounted(){
        if (this.type==='loss'){
          this.radio = [
            {label: "machine", key: 'machine'},
            {label: "volume", key: 'volume'},
            {label: "energy", key: 'energy'},
            {label: "manpower", key: 'manpower'},
            {label: "main tenance", key: 'main tenance'},
          ]
        }else if(this.type==='operationKPI'){
          this.radio = [
            {label: "machineKPI", key: 'machine'},
            {label: "volumeKPI", key: 'volume'},
            {label: "energyKPI", key: 'energy'},
            {label: "manpowerKPI", key: 'manpower'},
            {label: "main tenanceKPI", key: 'main tenance'},
          ]
        }

      this.value = this.default;

    }
  }
</script>

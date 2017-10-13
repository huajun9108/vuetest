<style scoped>
.ivu-radio-group{
    line-height:68px;
  }
.ivu-radio-wrapper{
  font-size:18px;
  margin-right: 26px;
}
</style>

<template>
  <RadioGroup v-model="value" type="radio" @on-change="change()">
    <Radio v-for="(item,idx) in radio" :label="item.label" :key='idx'>{{item.key}}</Radio>
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
        }else if(this.type==='singleAgenda'){
          this.radio = [
            {label: "machineAgenda", key: 'machine'},
            {label: "volumeAgenda", key: 'volume'},
            {label: "energyAgenda", key: 'energy'},
            {label: "manpowerAgenda", key: 'manpower'},
            {label: "main tenanceAgenda", key: 'main tenance'},
          ]
        }else if(this.type==='savingBook'){
          this.radio = [
            {label: "machineBook", key: 'machine'},
            {label: "volumeBook", key: 'volume'},
            {label: "energyBook", key: 'energy'},
            {label: "manpowerBook", key: 'manpower'},
            {label: "main tenanceBook", key: 'main tenance'},
          ]
        }

      this.value = this.default;

    }
  }
</script>

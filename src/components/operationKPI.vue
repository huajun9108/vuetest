<style>
  #kpiContainer{
    padding:20px;
  }
</style>

<template>
  <div id="operationKPI">
    <RadioGroup v-model="value" type="button" @on-change="change()">
      <Radio label="machine"></Radio>
      <Radio label="material"></Radio>
      <Radio label="volume"></Radio>
      <Radio label="energy"></Radio>
      <Radio label="manpower"></Radio>
      <Radio label="main tenance"></Radio>
    </RadioGroup>
    <div id="kpiContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default{
        name:'left1',
        data() {
          return{
              value:'machine'
          }
        },
        methods:{
            change:function () {
               this.$router.push(`/operationKPI/${this.value}`)
            }
        },
        mounted:function () {
        }
    }
</script>

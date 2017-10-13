<style scoped>
label.ivu-radio-wrapper.ivu-radio-group-item{
    border-style: none;
}
#breakdown a{
  background-color: #ddd;
  color: white;
  width:130px;
  line-height:30px;
  font-size:18px;
  text-align:center;
  display:inline-block;
}
.router-link-active{
  background-color: #ff8b8b !important;

}
#breakdown{
  background-color: #f2f2f2;
  height: 100vh;
}
#breakdownMenu{
  padding-left: 20px;
}
</style>

<template>
  <div id="breakdown">
    <div id="breakdownMenu">
    <br />
    <div>
    <router-link to="/operationKPI/machineKPI/breakdown/list">     
			<span  @click="changeSpan(true)" :class="sFlag?'active':'' ">list</span>
    </router-link><router-link to="/operationKPI/machineKPI/breakdown/pare to chat"> 
			<span  @click="changeSpan(false)" :class="sFlag?'':'active'">pare to chat</span>
    </router-link>
   
		</div>
    <div id="breakdownContainer">
    <br />
    <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'breakdown',
  data() {
    return {
       sFlag:true,
    }
  },
  methods: {
    changeSpan(flag){
      this.sFlag=flag
    }
  },
  mounted: function () {
  }
}
</script>

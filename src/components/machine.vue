<style scoped>

#machine a{
  font-size:24px;
  text-align:center;
  display:inline-block;
  color:#131313;
  line-height:36px;
  margin:0;
  padding:0
  
}
#machine a span{
  padding:8px 30px;
}
.router-link-active{
  background-color: #0084c8;
  color: white !important;
  border-color: #0084c8;
  box-shadow:-1px 0 0 0  #0084c8;
  border-radius: 18px;
}
#machineContainer{
  background-color: #f2f2f2;
}
</style>

<template>
  <div id="machine">
    <hr>
    <br />
    <div>
    <router-link to="/loss/machine/overview">     
			<span  @click="changeSpan(true)" :class="sFlag?'active':'' ">overview</span>
    </router-link>
    <router-link to="/loss/machine/OEE no losses"> 
			<span  @click="changeSpan(false)" :class="sFlag?'':'active'">OEE no losses</span>
    </router-link>
    <router-link to="/loss/machine/grafico OEE"> 
			<span  @click="changeSpan(false)" :class="sFlag?'':'active'">grafico OEE</span>
    </router-link>
   
		</div>
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

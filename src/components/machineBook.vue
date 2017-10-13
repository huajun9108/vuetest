<style scoped>


#machineBook a{
  width:158px;
  font-size:24px;
  text-align:center;
  display:inline-block;
  color:#131313;
  line-height:36px;
  margin:0;
  padding:0
  
}
.router-link-active{
  background-color: #0084c8;
  color: white !important;
  border-color: #0084c8;
  box-shadow:-1px 0 0 0  #0084c8;
  border-radius: 18px;
}
#machineBookContainer{
  background-color: #f2f2f2;
}
#machineBookhr{
  padding-left: 20px;
  padding-bottom: 20px;
}
#machineBookMenu{
  padding-left: 20px;
  padding-bottom: 20px;
}

</style>

<template>
  <div id="machineBook">
    <div id="machineBookhr">
    <hr>
    </div>
    <div id="machineBookMenu">
    <router-link to="/savingBook/machineBook/savings">     
			<span  @click="changeSpan(true)" :class="sFlag?'active':'' ">savings</span>
    </router-link>
    <router-link to="/savingBook/machineBook/masterplan"> 
			<span  @click="changeSpan(false)" :class="sFlag?'':'active'">masterplan</span>
    </router-link>
		</div>

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

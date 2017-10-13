<style scoped>
 .ivu-menu{
   background: #0084c8;
 }
.ivu-menu-item{
  color: #d4e2ed;
  font-size: 24px;
  font-family: "微软雅黑";
}
.ivu-menu-item:hover{
  background-color: #389fd4;
  color: white;
  font-family: "微软雅黑";
}
.ivu-menu-item-selected{
  font-size: 26px;
  background-color: #015c8b;
  font-family: "微软雅黑";
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: white;
  }
</style>

<template>
  <Menu theme="light">
    <router-link to="/financialReport">
      <MenuItem name="financial report">
        financial report
      </MenuItem>
    </router-link>
    <router-link to="/loss">
      <MenuItem name="loss">
        loss
      </MenuItem>
    </router-link>
    <router-link to="/operationKPI">
      <MenuItem name="operation KPI">
        operation KPI
      </MenuItem>
    </router-link>
    <router-link to="/single agenda">
      <MenuItem name="single agenda">
        single agenda
      </MenuItem>
    </router-link>
    <router-link to="/savingBook">
      <MenuItem name="saving book">
        saving book
      </MenuItem>
    </router-link>
  </Menu>
</template>

<script>
  export default {
    name: 'left-Nav',
    data(){
      return {
        current: '',
        menu: []
      }
    },
    mounted(){
    },
    watch: {
      $route(to, from){
      }
    }
  }
</script>

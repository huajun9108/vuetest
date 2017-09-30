<template>
  <Menu theme="dark">
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

<template>
  <Menu theme="light">
    <router-link to="/">
      <MenuItem name="0">
        首页
      </MenuItem>
    </router-link>
    <router-link v-for="item in menu" :to="item.href">
      <MenuItem :name="item.name">
        {{item.title}}
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
      for (let i = 0; i < 3; i++) {
        let obj = {
          title: `左边导航${i + 1}`,
          name: `/left${i + 1}`,
          href: `/left${i + 1}`
        }
        this.menu.push(obj)
      }
    },
    watch: {
      $route(to, from){
        console.log(to)
      }
    }
  }
</script>

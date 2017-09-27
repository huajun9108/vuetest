<style>
  #app{
   padding:20px;
  }
</style>

<template>
  <div id="app">
    <Row>
      <i-col :span="8">
        <leftNav></leftNav>
      </i-col>
      <i-col :span="16">
        <router-view></router-view>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import leftNav from './components/left.vue'
export default {
  name: 'app',
  components:{leftNav}
}
</script>



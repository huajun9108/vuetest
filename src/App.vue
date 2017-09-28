<style>
  #app{
    height:100vh;

  }
  #left-nav{
    height:100vh;
    width: 240px;
    background: #303238;
    position: fixed;
  }

  #right-content{
    margin-left: 240px;
    width: calc(100% - 240px);
  }
  #container{
    padding: 20px;
  }
</style>

<template>
  <div id="app">
    <Row>
      <div id="left-nav">
        <leftNav></leftNav>
      </div>
     <div id="right-content">
       <headerBar></headerBar>
       <div id="container">
         <router-view></router-view>
       </div>

     </div>
    </Row>
  </div>
</template>

<script>
  import leftNav from './components/leftNav.vue'
  import headerBar from './components/header.vue'
export default {
  name: 'app',
  components:{leftNav,headerBar}
}
</script>



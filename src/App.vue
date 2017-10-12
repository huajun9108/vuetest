<style>
  #app{
    height:100vh;

  }

  #software-name{
    background-color: #0084c8;
    color: #8db0d1;
    font-size: 18px;
    font-family: "微软雅黑";
    font-weight: bold;
    letter-spacing: 2px;
  }
  #left-nav{
    height:100vh;
    width: 240px;
    background: #0084c8;
    position: fixed;
  }

  #right-content{
    margin-left: 240px;
    width: calc(100% - 240px);
  }
  #container{
    /*padding: 20px;*/
  }
</style>

<template>
  <div id="app">
    <Row>
      <div id="left-nav">
        <div id="software-name">
          <pre>   EXCELLENCE
         OPERATION</pre>
        </div>
        <leftNav></leftNav>
      </div>
     <div id="right-content">
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

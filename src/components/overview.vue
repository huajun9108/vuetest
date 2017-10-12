<style  scoped>
.table {
  float: left;
  margin: 30px 30px 30px 30px;
}
</style>

<template>
  <div id="overview">
    <br />
    <Table class="table" border :columns="columns1" :data="data1"></Table>
    <Table class="table" border :columns="columns1" :data="data1"></Table>
    <Table class="table" border :columns="columns1" :data="data1"></Table>
    <Table class="table" border :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
    export default{
        data(){
            return{
              columns1: [
                {
                  title: '标题1',
                  key: 'title1'
                },
                {
                  title: '标题2',
                  key: 'title2'
                },
                {
                  title: '标题3',
                  key: 'title3'
                },
                {
                  title: '标题4',
                  key: 'title4',
                },
                {
                  title: '标题5',
                  key: 'title5'
                },
              ],
              data1: [
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                },
              ]
            }
        }
    }
</script>

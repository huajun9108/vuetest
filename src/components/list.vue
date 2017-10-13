<style  scoped>
.table {
  /*float: left;*/
  margin: 20px 20px 20px 20px;
}

</style>

<template>
  <div id="list">
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
                  align: 'center',
                  key: 'title1'
                },
                {
                  title: '标题2',
                  align: 'center',
                  key: 'title2'
                },
                {
                  title: '标题3',
                  align: 'center',
                  key: 'title3'
                },
                {
                  title: '标题4',
                  key: 'title4',
                  align: 'center',
                },
                {
                  title: '标题5',
                  align: 'center',
                  key: 'title5'
                },
                {
                  title: '标题6',
                  align: 'center',
                  key: 'title6'
                }
              ],
              data1: [
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
                {
                  title1: '',
                  title2: '',
                  title3: '',
                  title4: '',
                  title5: '',
                  title6: '',
                },
              ]
            }
        }
    }
</script>

<style scoped>
#report{
  width: 90%;
}
  #reportFormTitle{
    font-size: 28px;
    font-family: "微软雅黑";
    padding: 20px;
  }
  .ivu-table th .ivu-table-cell{
    text-align: center;
}
  #tableContainer{
    background-color: lightgray;
    padding: 30px;
  }
</style>

<template>
  <div id="report">
    <div id="reportFormTitle">report form
      <hr></hr>
    </div>

    <div id="tableContainer">
    <Table class="table" border :columns="columns1" :data="data1"></Table>
  </div>
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
            {
              title: '标题6',
              key: 'title6'
            },
            {
              title: '标题7',
              key: 'title7'
            },
          ],
          data1: [
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
            {
              title1: '',
              title2: '',
              title3: '',
              title4: '',
              title5: '',
              title6: '',
              title7: '',
            },
          ]
        }
    }
}
</script>

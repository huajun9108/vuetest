<style scoped>
#report{
  width: 95%;
  height: 100vh;
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
    height: 100vh;
    background-color: #f2f2f2;
    padding: 20px;
    margin-right: 2%;
    overflow-y: auto;
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
              key: 'title1',
              align:'center'
            },
            {
              title: '标题2',
              key: 'title2',
              align:'center'
            },
            {
              title: '标题3',
              key: 'title3',
              align:'center'
            },
            {
              title: '标题4',
              key: 'title4',
              align:'center'
            },
            {
              title: '标题5',
              key: 'title5',
              align:'center'
            },
            {
              title: '标题6',
              key: 'title6',
              align:'center'
            },
            {
              title: '标题7',
              key: 'title7',
              align:'center'
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

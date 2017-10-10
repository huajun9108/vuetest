<template>
  <div>
    <h1>report form</h1>
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

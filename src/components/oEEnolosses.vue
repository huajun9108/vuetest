<style scoped>
#main-charts {
  width: 600px;
  height: 400px;
}
</style>

<template>
<div>
  <div id="main-charts"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {}
  },
  methods: {
    initCharts: function(columnLabel, columnName, columnValue) {
      var chart = document.getElementById('main-charts');
      var echart = echarts.init(chart);
      var option = {
        title: {
          text: 'ECharts示例'
        },
        tooltip: {},
        legend: {
          data: columnLabel
        },
        xAxis: [{
          type: 'category',
          data: columnName
        }],
        yAxis: {},
        series: columnValue
      };
      echart.setOption(option);  
    },
    initData: function() {
      var columnLabel = ['甲', '乙'];
      var  columnName  =   ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];          
      var  columnValue  =  new  Array();          
      var  arrData  =  new  Array();
      for (var  i = 0; i < columnLabel.length; i++)                    {                      
        for (var  j = 0; j < columnName.length; j++)                        {                          
          arrData.push(Math.floor(Math.random() * 1000 + 1000 * j - 1000 * i));                      
        }                      
        console.info(arrData);                      
        columnValue.push(eval('('  +  ("{'name':'" + columnLabel[i] + "','type':'bar','data':[" + arrData + "]}")  +  ')'));                  
      }                                    
      initCharts(columnLabel, columnName, columnValue);    
    },                                   
  },

  mounted: function() {
    this.initData();
  }
}
</script>

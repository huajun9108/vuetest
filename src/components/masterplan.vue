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
  import echarts from  'echarts'
  export default{
    data(){
        return{}
    },
    methods: {
      initCharts: function () {
        var myChart = echarts.init(document.getElementById('main-charts'));
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        myChart.setOption(option);
      }

    },
    mounted: function () {
      this.initCharts();
    }
  }
</script>

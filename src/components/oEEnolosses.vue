<style scoped>
#oEE-charts {
  width: 600px;
  height: 400px;
}
#loss-machine-oEE{
  background-color: #f2f2f2;
  height: 100vh;
}
</style>

<template>
<div id="loss-machine-oEE">
  <div id="oEE-charts"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {}
  },
  methods: {
    initCharts: function() {
      var myChart = echarts.init(document.getElementById('oEE-charts'));
      var option = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['改善前', '改善后'],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value'
      },
      series: [{
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          barMaxWidth: 60,
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [70, 95]
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [5]
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [10]
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [10]
        },
        {
          name: '搜索引擎',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [5, 5]
        }
      ]
    };
    myChart.setOption(option);
    }

  },
  mounted: function() {
    this.initCharts();
  }
}
</script>

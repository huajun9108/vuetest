<style scoped>
  #grafico-charts {
    width: 600px;
    height: 400px;
  }
#loss-machine-grafico{
  background-color: #f2f2f2;
  height: 100vh;
}
</style>

<template>
  <div id="loss-machine-grafico">
    <div id="grafico-charts"></div>
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
      var myChart = echarts.init(document.getElementById('grafico-charts'));
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
          itemStyle: {
            normal: {
              color: '#0098ca'
            }
          },
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
          itemStyle: {
            normal: {
              color: '#a4c5f3'
            }
          },
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
          itemStyle: {
            normal: {
              color: '#2c9ff8'
            }
          },
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
          itemStyle: {
            normal: {
              color: '#92daf9'
            }
          },
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
          itemStyle: {
            normal: {
              color: '#74a2f8'
            }
          },
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

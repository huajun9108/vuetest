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
          title: {},
          legend: {},
          calculable: false,
          xAxis: [    {
          type: 'category',
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 4,
            lineStyle: {
              color: '#ff8b8b',
              type: 'dotted',
              width: 4,
            },
          },
          axisLabel: {
            show: false,
          },
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']    
        }  ],
          yAxis: [    {
          show: false,
          type: 'value',
        }  ],
          series: [    {   
          barGap: '0',
          name: '2011年',
                type: 'bar',
          itemStyle: {
            normal: {
              color: '#0084c8'
            }
          },
                data: [18203, 23489, 29034, 104970, 131744, 630230]    
        },      {      
          name: '2012年',
                type: 'bar',
          itemStyle: {
            normal: {
              color: '#ddd'
            }
          },
                data: [19325, 23438, 31000, 121594, 134141, 681807]    
        }  ]
      };
      myChart.setOption(option);
    }

  },
  mounted: function() {
    this.initCharts();
  }
}
</script>

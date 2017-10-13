<style scoped>
  #main-charts {
      width: 60%;
  height: 600px;
  }
  #book-savings{
    background-color: #f2f2f2;
    height: 100vh;
  }
</style>

<template>
  <div id="book-savings">
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
    initCharts: function() {
      var myChart = echarts.init(document.getElementById('main-charts'));
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
          data: [630230, 520987, 449087, 325463, 238201, 172080]    
        },      {      
          name: '2012年',
                type: 'bar',
          itemStyle: {
            normal: {
              color: '#ddd'
            }
          },
          data: [703272, 623289, 503287, 382872, 263289, 203829]    
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

<style scoped>
  #grafico-charts {
    width: 600px;
    height: 400px;
  }
</style>

<template>
  <div>
    <div id="grafico-charts"></div>
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
      var myChart = echarts.init(document.getElementById('grafico-charts'));
      var option = {  
        title: {    
          text: '世界人口总量',
              subtext: '数据来自网络'  
        },
        tooltip: {    
          trigger: 'axis'  
        },
          legend: {    
          data: ['2011年', '2012年']  
        },
          toolbox: {    
          show: true,
              feature: {      
            mark: {
              show: true
            },
                  dataView: {
              show: true,
              readOnly: false
            },
                  magicType: {
              show: true,
              type: ['line', 'bar']
            },
                  restore: {
              show: true
            },
                  saveAsImage: {
              show: true
            }    
          }  
        },
          calculable: true,
          xAxis: [    {
          type: 'category',
          axisTick: {
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
  mounted: function () {
    this.initCharts();
  }
}
</script>

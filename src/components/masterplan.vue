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
        legend: {    
        data: ['completed', 'undone']  
      },
        xAxis: [    {
        axisTick: {
          show: false,
        },
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },

      }  ],
        yAxis: [    {  
        type: 'category',
        splitLine: {
          show: true,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: ['任务A', '任务B', '任务C', '任务D', '任务E', '任务F']    
      }  ],
        series: [    {   
        barGap: '-100%',
        name: 'completed',
              type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            color: '#0084c8'
          }
        },
        data: [10234, 13456, 23456, 78901, 89098, 545679],
            
      },      {      
        name: 'undone',
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

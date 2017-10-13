<style scoped>
  #main-charts {
    width: 100%;
    height:600px;
  }
  #masterplan{
    background-color: #f2f2f2;
    height: 100vh;
  }
</style>

<template>
  <div id="masterplan">
    <div id="main-charts"></div>
  </div>
</template>

<script>
  import echarts from  'echarts'
  export default{
    data(){
        return{

        }
    },
    methods: {
      initCharts: function () {
        var myChart = echarts.init(document.getElementById('main-charts'));
         var option = {
                xAxis: {
                    type: "time",  // x轴时间类型<br>
                    position: "top", // x轴位于上方,
                    splitLine:{
                      show:false,
                    }
                },
                yAxis: {
                    type: "category",
                    data: ["项目总周期", "阶段一", "阶段二", "阶段三"].reverse(),
                     splitLine:{
                      show:true,
                    }
                },
                legend: {
                    type: 'scroll',
                    left:200,
                    bottom: 10,
                    data: [
                        'plan', 'fact',
                    ],
                },
                series: [

                {
                type: 'bar',
                barWidth: '30',
                // barGap: "-100%", // 计划和进度重叠
                stack: "计划",  // 占位条和着色条合并
                itemStyle: {
                    normal: {
                        opacity: 0 // 不绘制，仅作为占位条
                    },
                    emphasis: {
                        opacity: 0
                    }
                },
                data: [
                    [new Date(2017,8,1), "项目总周期"],
                    [new Date(2017,8,1), "阶段一"],
                    [new Date(2017,8,29), "阶段二"],
                    [new Date(2017,9,10), "阶段三"]
                ],
                markLine:{
                  lineStyle: {
                      normal:{
                        type:'solid',
                        color:'red',

                    },
                  },
                  data : [

                    { xAxis: new Date() ,
                      label: {
                      normal:{
                        show:true,
                        position:'end',
                        formatter :function getNowFormatDate() {
                        var date = new Date();
                        var seperator= "-";

                        var month = date.getMonth() + 1;
                        var strDate = date.getDate();
                        if (month >= 1 && month <= 9) {
                            month = "0" + month;
                        }
                        if (strDate >= 0 && strDate <= 9) {
                            strDate = "0" + strDate;
                        }
                        var currentdate = date.getFullYear() + seperator + month + seperator + strDate

                        return currentdate;
                      }
                      }
                     }
                    }
                  ],

                },

            },
            {
              name:'plan',
              type: 'bar',
              barWidth: '30',
              stack: "计划",
              itemStyle: {
                  normal: {
                      color: '#0084c8'
                  }
              },
              data: [
                  [new Date(2017,9,30), "项目总周期"],
                  [new Date(2017,8,29), "阶段一"],
                  [new Date(2017,9,10), "阶段二"],
                  [new Date(2017,9,31), "阶段三"]
              ],

            },
            {
                type: 'bar',
                barWidth: '30',
                stack: "进度",
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                        opacity: 0
                    }
                },
                data: [
                    [new Date(2017,8,1), "项目总周期"],
                    [new Date(2017,8,1), "阶段一"],
                    [new Date(2017,8,20), "阶段二"],
                    [new Date(2017,9,5), "阶段三"]
                ]
            },
            {
              name:'fact',
                type: 'bar',
                barWidth: '30',
                stack: "进度",
                itemStyle: {
                    normal: {
                        color: '#ddd'
                    }
                },
                data: [
                    [new Date(2017,9,20), "项目总周期"],
                    [new Date(2017,8,20), "阶段一"],
                    [new Date(2017,9,5), "阶段二"],
                    [new Date(2017,9,20), "阶段三"]
                ]
            }
        ]
      }
        myChart.setOption(option);
      }

    },
    mounted: function () {
      this.initCharts();
    }
  }
</script>

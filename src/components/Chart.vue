<template>
  <div id="chart" class="main">
    <div class="echartsBox">
      <div class="box" ref="bar">
      </div>
      <div class="box" ref="line">
      </div>
      <div class="box" ref="pie">
      </div>
      <div class="box">
      </div>
    </div>
   
  </div>
</template>
<script>

    import echarts from 'echarts';
   
    export default{
      name:'chart',
      data (){
        return {
          chartData:[
            {
              name: 'Monday',
              value: 10,
            },
            {
              name: 'Tuesday',
              value: 50,
            },
            {
              name: 'Wednesday',
              value: 30,
            },
            {
              name: 'Thursday',
              value: 40,
            },
            {
              name: 'Friday',
              value: 60,
            },
            {
              name: 'Saturday',
              value: 30,
            },
            {
              name: 'Sunday',
              value: 70,
            },
          ]
        }
      },
      mounted () {
        this.$nextTick(() => {
          this.drawChart(echarts.init(this.$refs.bar, 'dark'), 'bar', 'ECharts Bar');
          this.drawChart(echarts.init(this.$refs.line, 'dark'), 'line', 'ECharts Line');
          this.drawPie(echarts.init(this.$refs.pie, 'dark'));
        
        })
      },
      methods: {
        getData (){
          let [axis, data] = [new Set(), []];
          for(let i = 0; i < this.chartData.length; i++){
            axis.add(this.chartData[i].name);
            data.push(this.chartData[i].value);
          }
          return {
            axis: [...axis],
            data: data
          }
        },
        drawChart (chart, type, title){
          var data = this.getData ();
          chart.setOption({
              title: {
                text: title,
              },
              xAxis: {
                data: data.axis
              },
              yAxis: {},
              series: [{
                type: type,
                smooth: true,
                data: data.data
              }]
          });
        },
        drawPie (chart){
          chart.setOption({
            series : [
              {
                type:'pie',
                data:this.chartData,
                roseType: 'radius',
                itemStyle: {
                  normal: {
                    color: '#DD6B66',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              },
              }
            ]
          })
        }
      }
    }
</script>
<style lang="scss" scoped>
    .box{
      display: inline-flex;
      width: 45%;
      height: 300px;
      margin-right: 3%;
      margin-bottom: 30px;
    }
</style>

<template>
  <div id="chart" class="main">
    <div class="charts">
      <div class="context">
        <canvas width="300" height="300" ref="checkPie"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      name:'chart',
      mounted () {
        this.$nextTick(() => {
          this.drawPie(this.$refs.checkPie, 300, 300, '#96D3D3', '#F1F2F7', 'Visit', 20);
        })
      },
      methods: {
        drawAnimate (){
          
        },
        drawPie (c, cx, cy, innerColor, outerColor, subTitle, data){
          let ctx = c.getContext('2d');
          ctx.beginPath();
          ctx.arc(cx/2, cy/2, cx/8*2, 0, 2*Math.PI);
          ctx.fillStyle = innerColor;
          ctx.fill();
          ctx.closePath();

          ctx.beginPath();
          ctx.lineWidth = 10;
          ctx.strokeStyle = outerColor;
          ctx.arc(cx/2, cy/2, cx/8*2 + 20, 0, 2*Math.PI);
          ctx.stroke();
          ctx.closePath();

          ctx.fillStyle = '#333';
          ctx.font = '16px Verdana';
          var textWidth = ctx.measureText(subTitle).width;
          ctx.fillText(subTitle, cx/2 - textWidth/2, cy/2 - 15);

          ctx.fillStyle = '#fff';
          ctx.font = 'bold 28px Verdana';
          var textWidth = ctx.measureText(data).width;
          ctx.fillText(data, cx/2 - textWidth/2, cy/2 + 20);
        }
      }
    }
</script>
<style lang="scss" scoped>
  .charts{
    display: flex;
    border: 1px solid #dde2e7;
    background: #fff;
    .context{
      flex: 1;
    }
  }
</style>

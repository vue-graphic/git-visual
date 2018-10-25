 <template>
  <div id='canvas-container'></div>
</template>
<script>
 /* eslint-disable */
const canvasW = window.innerWidth || 200
const canvasH = window.innerHeight || 200

const PI = 3.141596
const QUARTER_PI = PI/4
const TWO_PI = 2* PI
const HALF_PI = PI/2

export default {
  mounted() {
    this.canvasW = canvasW
    this.canvasH = canvasH

    const s = ( sketch ) => {
      this.sketch = sketch
      sketch.setup = this.setup
    };

    const myp5 = new p5(s, 'canvas-container');
  },
  data: function(){
    return {
        sketch: null,
        canvasW: null,
        canvasH: null,
    }
  },
  computed: {
  },
  methods: {
    setup: function(){
      const {sketch, canvasW, canvasH} = this
      this.canvasEle = sketch.createCanvas(canvasW, canvasH)

      sketch.background(0);    //Setting Background to Black
      //fullScreen();    //Setting Screen to Fullscreen
      // sketch.size(800,600);    //Setting screen to 800,600
      sketch.strokeWeight(0);    //Setting Stroke to 0
      this.drawFib(1,0,1,canvasW/2,canvasH/2);  
    },
    drawFib: function(a, b, step, x, y){
      const {sketch} = this

      if (step<20) {
        sketch.fill(sketch.random(0,15)*17,sketch.random(0,15)*17,sketch.random(0,15)*17);
        if (step==1)
          sketch.arc(x,y,a*2,a*2,PI+QUARTER_PI,TWO_PI);
        if (step%4 == 1 && step != 1)
          sketch.arc((x-=a)+a,y+a,a*2,a*2,PI, PI+HALF_PI);
        if (step%4 == 2) 
          sketch.arc(x+a,y+=b,a*2,a*2,HALF_PI,PI); 
        if (step%4 == 3) 
          sketch.arc(x+=b,y-=(a-b),a*2,a*2,0,HALF_PI); 
        if (step%4 == 0) 
          sketch.arc(x-=(a-b),(y-=a)+a,a*2,a*2,PI+HALF_PI,TWO_PI);
        this.drawFib(a+b,a,step+1,x,y);
      }
    }
  }
}
</script>
<style>
#canvas-container {
    background: grey;
    width: 100vw;
    height: 100vh;
}

</style>

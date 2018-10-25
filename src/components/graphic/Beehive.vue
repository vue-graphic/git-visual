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
const THIRD_PI = PI/3
const SIXTH_PI = PI/6

export default {
  mounted() {
    this.canvasW = canvasW
    this.canvasH = canvasH
    this.R = canvasW/50

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
      R: 0,
      queue: []
    }
  },
  computed: {
  },
  methods: {
    setup: function(){
      const {sketch, canvasW, canvasH} = this
      this.canvasEle = sketch.createCanvas(canvasW, canvasH)

      sketch.background(30); 
      sketch.strokeWeight(2);
      this.initDraw()
    },
    initDraw: function(){
      const {sketch, canvasW, canvasH, R, queue} = this

      const x0 = canvasW/2
      const y0 = canvasH/2

      queue.push({x: x0, y:y0, R})
      this.drawNext(0)
    },
    drawNext: function(index){
      const {sketch, queue} = this

      setTimeout(() => {
        if(!queue[index]) return 

        const {x, y, R} = queue[index]
        const pixel = sketch.get(0, 0)

        if(queue[index-1]) {
          const {x: px, y: py, R} = queue[index-1]
          sketch.push();
          sketch.stroke(150);
          this.polygon(px, py, R, 6);
          sketch.pop();
        }

        sketch.push();
        sketch.stroke(255, 200, 200);
        this.polygon(x, y, R, 6);
        sketch.pop();
        queue[index].isFinished = true
        this.calculateNextPoly(x, y, queue)

        if(index < queue.length)
          return this.drawNext(index +1)
      }, 100);
    },
    calculateNextPoly: function(x0, y0, queue){
      const {sketch, canvasW, canvasH, R} = this

      const angle = THIRD_PI;
      const a0 = SIXTH_PI;
      const r0 = 2 * sketch.sin(THIRD_PI) * R

      const isExisted = (tx,ty) => {
        return queue.some( item => {
          const dis = sketch.abs(item.x - tx) + sketch.abs(item.y - ty)
          return dis<r0/2
        })
      }

      for (var a = a0; a < TWO_PI; a += angle) {
        const dx = sketch.cos(a) * r0;
        const dy = sketch.sin(a) * r0;
        const x = x0 + dx
        const y = y0 + dy

        if(x > -(r0) && x < canvasW+r0 && y > -r0 && y < canvasH+r0 && !isExisted(x, y )) {
            queue.push({ x,y,R })
        }
      }
    },
    polygon: function(x, y, radius) {
      const {sketch} = this
      const {CLOSE} = sketch

      sketch.fill(230)
      sketch.beginShape();
      for (var a = 0; a < TWO_PI; a += THIRD_PI) {
        var sx = x + sketch.cos(a) * radius;
        var sy = y + sketch.sin(a) * radius;
        sketch.vertex(sx, sy);
      }
      sketch.endShape(CLOSE);
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

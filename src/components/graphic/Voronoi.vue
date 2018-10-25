 <template>
  <div id='canvas-container'></div>
</template>
<script>
 /* eslint-disable */
const canvasW = window.innerWidth || 200
const canvasH = window.innerHeight || 200

const PI = 3.141596
const TWO_PI = 2* PI
const n = 15;
let r = null

class Cell {
  constructor(x, y, sx, sy, sketch) {
    this.x = x;
    this.y = y; 
    this.sx = sx; 
    this.sy = sy;
    this.sketch = sketch
  }

  show() {
    const {sketch} = this
    sketch.push();
    sketch.translate(this.x, this.y, 0);
    var a = 0;
    var s = 30;
    var p = TWO_PI / s;
    sketch.beginShape();
    for (var i = 0; i < s; i++) {
      sketch.vertex(0, 0, 0);
      sketch.vertex(r * sketch.cos(a), r * sketch.sin(a), -r);
      sketch.vertex(r * sketch.cos(a + p), r * sketch.sin(a + p), -r);
      a += p;
    }
    sketch.endShape();
    sketch.fill(0);
    sketch.ellipse(0, 0, 5, 5);
    sketch.pop();
  }
  
  advance() {
    this.x += this.sx;
    this.y += this.sy;
    if (this.x < 0 || this.x > canvasW) {
      this.sx = -this.sx;
    }     
    if (this.y < 0 || this.y > canvasH) {
      this.sy = -this.sy;
    }
  }
}
export default {
  mounted() {
    this.canvasW = canvasW
    this.canvasH = canvasH

    const s = ( sketch ) => {
      this.sketch = sketch
      sketch.setup = this.setup
      sketch.draw = this.draw
    };

    const myp5 = new p5(s, 'canvas-container');
  },
  data: function(){
    return {
      sketch: null,
      canvasW: null,
      canvasH: null,
      R: 0,
      cells: [],
      queue: []
    }
  },
  computed: {
  },
  methods: {
    setup: function(){
      const {cells} = this
      
      const {sketch, canvasW, canvasH} = this
      this.canvasEle = sketch.createCanvas(canvasW, canvasH, sketch.WEBGL)
      
      sketch.colorMode(sketch.HSB, 1);
      sketch.noStroke();

      r = sketch.dist(0, 0, canvasW, canvasH);

      sketch.ortho(-canvasW, canvasW, -canvasH, canvasH, 0, 2*r);
      for (let i = 0; i < n; i++) {
        cells[i] = new Cell(
          sketch.random(canvasW/2), sketch.random(canvasH/2), 
          sketch.random(-1, 1), sketch.random(-1, 1),
          sketch
        );
      }
    },
    draw: function(){
      const {sketch, cells, canvasW, canvasH} = this
      const {mouseX, mouseY} = sketch
      sketch.background(204);

      for (let i = 0; i < n; i++) {
        sketch.fill(
            i/ n,
            sketch.map(i, 0, n, 0, 1),
            1);
        cells[i].show();
        cells[i].advance();
      }
      sketch.fill(0.7, 1, 1);
      const cell = new Cell(mouseX, mouseY, 0, 0, sketch);
      cell.show();
    },
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

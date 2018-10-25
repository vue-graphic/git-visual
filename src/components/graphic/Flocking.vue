 <template>
  <div id='canvas-container'></div>
</template>
<script>
 /* eslint-disable */
 import Boid from './Boid'
const DEFAULT_AUDIOLIST_PADDING = 5
const INIT_BOID = 1
const canvasW = window.innerWidth || 200
const canvasH = window.innerHeight || 200

function Flock() {
  // An array for all the boids
  this.boids = []; // Initialize the array
}

Flock.prototype.run = function() {
  for (var i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

export default {
  mounted() {
    this.canvasW = canvasW
    this.canvasH = canvasH

    const s = ( sketch ) => {
      this.sketch = sketch
      sketch.setup = this.setup
      sketch.draw = this.draw
      sketch.mouseDragged = this.mouseDragged
    };

    const myp5 = new p5(s, 'canvas-container');

    // create 20 birds in 2s
    setTimeout(()=>{
      this.initFlock(10)
    }, 2000)
  },
  data: function(){
    return {
        sketch: null,
        status: 'stop',
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

      this.flock = new Flock();
      // Add an initial set of boids into the systexm
      this.initFlock(1)
    },
    draw: function(){
      const {sketch, flock} = this
      sketch.background(50,50,50);
      flock.run();
    },
    mouseDragged: function() {
      const {sketch, flock} = this
      const {mouseX, mouseY} = sketch
      flock.addBoid(new Boid(mouseX, mouseY, {p5, sketch, canvasW, canvasH}))
    },
    initFlock: function(n){
      const {sketch, canvasW, canvasH, flock} = this
      for (let i = 0; i < n; i++) {
        const b = new Boid(canvasW/2,canvasH/2, {p5, sketch, canvasW, canvasH});
        flock.addBoid(b);
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

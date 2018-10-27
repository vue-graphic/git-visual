 <template>
  <div id='canvas-container'></div>
</template>
<script>
 /* eslint-disable */
import Bubble from './Bubble'
import colorUtils from '../../../utils/color'
const canvasW = window.innerWidth || 200
const canvasH = window.innerHeight || 200

export default {
  props: ['data'],
  mounted() {
    this.canvasW = canvasW
    this.canvasH = canvasH
    this.x = canvasW / 2;
    this.y = canvasH / 2;

    const s = ( sketch ) => {
      this.sketch = sketch
      sketch.setup = this.setup
      sketch.draw = this.draw
      sketch.preload = this.preload
      sketch.mouseReleased = this.mouseReleased
      // sketch.mouseMoved = this.mouseMoved
      sketch.mouseClicked = this.mouseClicked
      sketch.mouseClicked = this.mouseClicked
      sketch.mouseDragged = this.mouseDragged
    };

    const myp5 = new p5(s, 'canvas-container');
    console.log('this.data: ', this.data)

    const {sketch} = this
    const {constrain, map} = sketch
    this.bubbles = this.data.map (meta => {
      const {count} = meta

      if(count < this.minCount) this.minCount = count
      if(count > this.maxCount) this.maxCount = count

      const x = sketch.random(0, canvasW)
      const y = sketch.random(0, canvasH)
      const r = map(constrain(count, 1, 10000), 0, 1000, 0, 10);
      const color = colorUtils.hsvToRgb(r/10, 0.3, 0.8)
      return new Bubble(x, y, r, {meta, color, canvasW, canvasH, sketch, p5})
    })

    this.preload()
  },
  data: function(){
    return {
        sketch: null,
        status: 'stop',
        canvasW: null,
        canvasH: null,
        minCount: 0,
        maxCount: 0
    }
  },
  computed: {
  },
  methods: {
    setup: function(){
      const {sketch, canvasW, canvasH} = this

      this.canvasEle = sketch.createCanvas(canvasW, canvasH)
    },
    draw: function(){
      const {sketch, canvasW, canvasH, bubbles} = this

      sketch.background(50,50,50);
      sketch.translate(0,0)

      if(!bubbles) return

      bubbles.forEach(function(bubble){
        bubble.run(bubbles)
      });
    },
    preload: function(){
      console.log('1 -=-=-=-=-= preload -=-=-=-=-=')

      // const {bubbles} = this
      // if(bubbles.preload) {
      //   console.log('2 -=-=-=-=-= preload -=-=-=-=-=')
      //   return bubbles.preload()
      // }
    },
    mouseReleased: function(){
      const {bubbles} = this
      if(bubbles.mouseReleased) return bubbles.mouseReleased()
    },
    // mouseMoved: function(){
    //   const {bubbles} = this
    //   if(bubbles.mouseMoved) return bubbles.mouseMoved()
    // },
    mouseClicked: function(){
      const {bubbles} = this
      const cb = (item) => {
        console.log(' -=-=-= item: ', item)
      }
      bubbles.forEach(item => item.mouseClicked && item.mouseClicked(cb))
    },
    windowResized: function(){
      const {bubbles} = this
      if(bubbles.windowResized) return bubbles.windowResized()
    },
    // mouseDragged: function() {
    //   const {sketch, flock} = this
    //   const {mouseX, mouseY} = sketch
    //   flock.addBoid(new Boid(mouseX, mouseY, {p5, sketch, canvasW, canvasH}))
    // },
    // initFlock: function(n){
    //   const {sketch, canvasW, canvasH, flock} = this
    //   for (let i = 0; i < n; i++) {
    //     const b = new Boid(canvasW/2,canvasH/2, {p5, sketch, canvasW, canvasH});
    //     flock.addBoid(b);
    //   }
    // }
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

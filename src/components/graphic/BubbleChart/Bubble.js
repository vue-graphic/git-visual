/* eslint-disable */
import Boid from './Boid'

const SELECTED_COLOR = [255, 0, 0]

function Bubble(x, y, r, config) {
  config.maxspeed = 2
  Boid.call(this, x, y, r, config);
  this.colorOrigin = config && config.color
  this.meta = config && config.meta
  this.isSelected = false
}

Bubble.prototype = Object.create(Boid.prototype);

Bubble.prototype.mouseClicked = function(cb){
  this.reset()

  const {sketch, r, position, meta} = this
  const {x, y} = position
  const {mouseX, mouseY, dist} = sketch

  const d = dist(mouseX, mouseY, x, y);

  if(d <=r*2 ) {
    this.isSelected = true
    this.color = SELECTED_COLOR
    cb(meta)
  }
}

Bubble.prototype.reset = function(){
  this.isSelected = false
  this.color = [...this.colorOrigin]
}

// Bubble.prototype.render = function() {
//   // const {sketch, position, r} = this
//   // const {x, y} = position

//   // sketch.stroke(50)
//   // sketch.fill(100)
//   // sketch.ellipse(x, y, r, r)

//   if(!this.isSelected) return Boid.prototype.render.call(this)

//   return Boid.prototype.render.call(this)
// }

export default Bubble
const SEPARATION_DIS = 10
const MAX_SPEED = 4
const MAX_FORCE = 0.05 

class Bubble {
  constructor (sketch, x, y, options = {}) {
    const {r = 24, canvasW = 100, canvasH = 100} = options
    this.sketch = sketch
    this.position = sketch.createVector(x, y)
    this.acceleration = sketch.createVector(0, 0)
    this.v = sketch.createVector(sketch.random(-1, 1), sketch.random(-1, 1))
    this.r = r
    this.canvasW = canvasW
    this.canvasH = canvasH
  }
  draw () {
    const {sketch, position, r} = this
    const {x, y} = position

    sketch.stroke(50)
    sketch.fill(100)
    sketch.ellipse(x, y, r, r)
  }
  go () {
    const {position, canvasH, canvasW, sketch, r} = this
    const {x,y} = position

    if (x > canvasW - r || x < r) {
      const {x: vx, y: vy} = this.v
      this.v = sketch.createVector(-vx, vy)
    }
    if (y > canvasH - r || y < r) {
      const {x: vx, y: vy} = this.v
      this.v = sketch.createVector(vx, -vy)
    }

    this.v.add(this.acceleration)
    this.v.limit(MAX_SPEED)
    this.position.add(this.v)
    this.acceleration.mult(0) // Reset accelertion to 0 each cycle
  }

  collideToAnother (thatBubble) {
    if(!thatBubble) return false

    const {sketch, position: thisPosition, r: thisR} = this
    const {x: thisX, y: thisY} = thisPosition

    const {position: thatPosition, r: thatR} = thatBubble
    const {x: thatX, y: thatY} = thatPosition

    const isCollided = sketch.collideCircleCircle(thisX,thisY,thisR,thatX,thatY,thatR)

    return isCollided
  }
  collide (thatBubble) {
    if(!this.collideToAnother(thatBubble))  return

    const {sketch, position: thisPosition, r: thisR} = this
    const {x: thisX, y: thisY} = thisPosition

    const {position: thatPosition, r: thatR} = thatBubble
    const {x: thatX, y: thatY} = thatPosition

    const dx = (thatX-thatR) - (thisX-thisR)
    const dy = (thatY-thatR) - (thisY-thisR)
    const dv = sketch.createVector(dx, dy).mult(0.001)

    // console.log(dv*0.1)

    this.v.add(dv)
  };
  separate (thatBubble) {
    var desiredseparation = SEPARATION_DIS
    var steer = this.sketch.createVector(0, 0)
    var count = 0
    // For every boid in the system,  check if it's too close
    for (var i = 0; i < boids.length; i++) {
      var d = this.p5.Vector.dist(this.position, boids[i].position)
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        var diff = this.p5.Vector.sub(this.position, boids[i].position)
        diff.normalize()
        diff.div(d)        // Weight by distance
        steer.add(diff)
        count++            // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      steer.div(count)
    }
  
    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize()
      steer.mult(this.maxspeed)
      steer.sub(this.velocity)
      steer.limit(this.maxforce)
    }
    return steer
  }
  applyForce(force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force)
  }
}

export default Bubble

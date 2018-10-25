/* eslint-disable */
const SEPARATION_DIS = 25.0

function Boid(x, y, {p5, sketch, canvasW, canvasH}) {
  this.p5 = p5
  this.sketch = sketch
  this.canvasW = canvasW
  this.canvasH = canvasH
  this.acceleration = sketch.createVector(0, 0)
  this.velocity = sketch.createVector(sketch.random(-1, 1), sketch.random(-1, 1))
  this.position = sketch.createVector(x, y)
  this.r = 4.0
  this.maxspeed = 4
  this.maxforce = 0.05 
}

Boid.prototype.run = function (boids) {
  this.flock(boids)
  this.update()
  this.borders()
  this.render()
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force)
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids)   // Separation
  var ali = this.align(boids)      // Alignment
  var coh = this.cohesion(boids)   // Cohesion
  // Arbitrarily weight these forces
  sep.mult(1.5)
  ali.mult(1.0)
  coh.mult(1.0)
  // Add the force vectors to acceleration
  this.applyForce(sep)
  this.applyForce(ali)
  this.applyForce(coh)
}

Boid.prototype.update = function() {
  this.velocity.add(this.acceleration)
  // Limit speed
  this.velocity.limit(this.maxspeed)
  this.position.add(this.velocity)
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0)
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
   // A vector pointing from the location to the target
  var desired = this.p5.Vector.sub(target, this.position)
  // Normalize desired and scale to maximum speed
  desired.normalize()
  desired.mult(this.maxspeed)
  // Steering = Desired minus Velocity
  var steer = this.p5.Vector.sub(desired, this.velocity)
  steer.limit(this.maxforce)
  return steer
}

Boid.prototype.render = function() {
  const {sketch, r} = this
  const opacity = sketch.map(this.velocity.mag(),  0,  this.maxspeed,  0,  200)
  var theta = this.velocity.heading() + sketch.radians(90)
  sketch.fill(200,  200,  200,  opacity)
  sketch.noStroke()
  // sketch.stroke(200)
  sketch.push()
  sketch.translate(this.position.x, this.position.y)
  sketch.rotate(theta)
  sketch.beginShape()
  sketch.vertex(0,  -r*2)
  sketch.vertex(-r,  r*2)
  sketch.vertex(r,  r*2)
  sketch.endShape(sketch.CLOSE)
  // sketch.ellipse(0, 0, SEPARATION_DIS, SEPARATION_DIS);
  sketch.pop()
}

// Wraparound
Boid.prototype.borders = function() {
  const {canvasH, canvasW, position, r} = this
  const {x,y} = position
  if (position.x < - r)  position.x = canvasW + r
  if (position.y < - r)  position.y = canvasH + r
  if (position.x > canvasW + r) position.x = - r
  if (position.y > canvasH+ r) position.y = - r
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
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

// Alignment
// For every nearby boid in the system,  calculate the average velocity
Boid.prototype.align = function(boids) {
  var neighbordist = 50
  var sum = this.sketch.createVector(0, 0)
  var count = 0
  for (var i = 0; i < boids.length; i++) {
    var d = this.p5.Vector.dist(this.position, boids[i].position)
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity)
      count++
    }
  }
  if (count > 0) {
    sum.div(count)
    sum.normalize()
    sum.mult(this.maxspeed)
    var steer = this.p5.Vector.sub(sum, this.velocity)
    steer.limit(this.maxforce)
    return steer
  } else {
    return this.sketch.createVector(0, 0)
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids,  calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50
  var sum = this.sketch.createVector(0, 0)   // Start with empty vector to accumulate all locations
  var count = 0
  for (var i = 0; i < boids.length; i++) {
    var d = this.p5.Vector.dist(this.position, boids[i].position)
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position) // Add location
      count++
    }
  }
  if (count > 0) {
    sum.div(count)
    return this.seek(sum)  // Steer towards the location
  } else {
    return this.sketch.createVector(0, 0)
  }
}

export default Boid
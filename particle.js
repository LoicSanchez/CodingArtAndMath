var particle = {
	position: null,
	velocity: null,
	gravity: null,
	mass: 1,
	radius: 0,
	bounce: -1,

	create: function (x, y, speed, direction, grav) {
		var obj = Object.create(this)
		obj.position = vector.create(x, y)
		obj.velocity = vector.create(0, 0)
		obj.velocity.setLength(speed)
		obj.velocity.setAngle(direction)
		obj.gravity = vector.create(0, grav || 0)
		return obj
	},
	accelerate: function (accelerationVector) {
		this.velocity.addTo(accelerationVector)
	},
	update: function () {
		this.velocity.addTo(this.gravity)
		this.position = this.position.add(this.velocity)
	},
	angleTo: function (particle2) {
		return Math.atan2(
			particle2.position.getY() - this.position.getY(),
			particle2.position.getX() - this.position.getX()
		)
	},
	distanceTo: function (particle2) {
		var dx = particle2.position.getX() - this.position.getX(),
			dy = particle2.position.getY() - this.position.getY()

		return Math.sqrt(dx * dx + dy * dy)
	},
	gravitateTo: function (particle2) {
		var grav = vector.create(0, 0),
			dist = this.distanceTo(particle2)
		grav.setLength(particle2.mass / (dist * dist))
		grav.setAngle(this.angleTo(particle2))

		this.velocity.addTo(grav)
	},
}

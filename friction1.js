window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var p = particle.create(
			width / 2,
			height / 2,
			10,
			Math.random() * Math.PI * 2
		),
		friction = vector.create(0.15, 0),
		simpleFriction = 0.97
	p.radius = 10

	update()
	function update() {
		context.clearRect(0, 0, width, height)
		// friction.setAngle(p.velocity.getAngle())
		// if (p.velocity.getLength() > friction.getLength()) {
		// 	p.velocity.subtractFrom(friction)
		// } else {
		// 	p.velocity.setLength(0)
		// }

		//Simple method - added to particle class
		p.velocity.multiplyBy(simpleFriction)

		p.update()
		context.beginPath()
		context.arc(
			p.position.getX(),
			p.position.getY(),
			p.radius,
			0,
			Math.PI * 2,
			false
		)
		context.fill()

		requestAnimationFrame(update)
	}
}

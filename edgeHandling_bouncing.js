window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	// var p = particle.create(100, 100, 3, Math.PI / 6)
	var particles = [],
		numParticles = 100

	for (var i = 0; i < numParticles; i++) {
		var p = createParticle()
		particles.push(p)
	}
	function createParticle() {
		var p = particle.create(
			width / 2,
			height,
			Math.random() * 8 + 5,
			-Math.PI / 2 + (Math.random() * 0.2 + 0.1),
			0.1
		)
		p.radius = Math.random() * 10 + 2
		p.bounce = -0.8
		return p
	}

	update()
	function update() {
		context.clearRect(0, 0, width, height)

		for (var i = 0; i < particles.length; i++) {
			var p = particles[i]
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
			// wrap(p)
			// regen(p)
			bounce(p)
		}

		// removeDeadParticles()

		requestAnimationFrame(update)
	}
	function removeDeadParticles() {
		for (var i = particles.length - 1; i >= 0; i--) {
			var p = particles[i]
			if (
				p.position.getX() - p.radius > width ||
				p.position.getY() - p.radius > height ||
				p.position.getX() + p.radius < 0 ||
				p.position.getY() + p.radius < 0
			) {
				particles.splice(i, 1)
			}
		}
	}
	function wrap(p) {
		if (p.position.getX() - p.radius > width) {
			p.position.setX(-p.radius)
		}
		if (p.position.getX() + p.radius < 0) {
			p.position.setX(width + p.radius)
		}
		if (p.position.getY() - p.radius > height) {
			p.position.setY(-p.radius)
		}
		if (p.position.getY() + p.radius < 0) {
			p.position.setY(height + p.radius)
		}
	}
	function regen(p) {
		if (p.position.getY() - p.radius > height) {
			p.position.setX(width / 2)
			p.position.setY(height)
			p.velocity.setLength(Math.random() * 8 + 5)
			p.velocity.setAngle(Math.PI + (Math.random() * 2 + 0.1))
			//-Math.PI / 2 + (Math.random() * 0.2 + 0.1),
		}
	}
	function bounce(p) {
		if (p.position.getX() + p.radius > width) {
			p.position.setX(width - p.radius)
			p.velocity.setX(p.velocity.getX() * p.bounce)
		}
		if (p.position.getX() - p.radius < 0) {
			p.position.setX(p.radius)
			p.velocity.setX(p.velocity.getX() * p.bounce)
		}
		if (p.position.getY() + p.radius > height) {
			p.position.setY(height - p.radius)
			p.velocity.setY(p.velocity.getY() * p.bounce)
		}
		if (p.position.getY() - p.radius < 0) {
			p.position.setY(p.radius)
			p.velocity.setY(p.velocity.getY() * p.bounce)
		}
	}
}

window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	// var p = particle.create(100, 100, 3, Math.PI / 6)
	var particles = [],
		numParticles = 1000

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	for (var i = 0; i < numParticles; i++) {
		var p = particle.create(
			width / 2,
			height / 3,
			Math.random() * 5 + 2,
			Math.random() * Math.PI * 2
		)
		p.radius = Math.random() * 10 + 2
		p.color = `rgba(${randomIntFromInterval(
			153,
			224
		)},${randomIntFromInterval(153, 224)},${randomIntFromInterval(
			153,
			224
		)},0.9)`
		particles.push(p)
	}
	//153 224

	update()
	function update() {
		context.clearRect(0, 0, width, height)
		console.log(particles.length)

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
			context.fillStyle = p.color

			context.fill()
			// wrap(p)
		}

		removeDeadParticles()

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
}

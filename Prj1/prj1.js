window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var numElem = 15,
		particles = [],
		defaultWidth = 80,
		padding = 10,
		defaultVelocity = 1,
		defaultVelocity2 = 0.9

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	//check numElem against height
	numElem = Math.floor(height / (defaultWidth + padding))

	for (var i = 0; i < numElem; i++) {
		var p = particle.create(
			width / 2 - defaultWidth / 2,
			padding + i * (defaultWidth + padding),
			i >= Math.floor(numElem / 2)
				? defaultVelocity - i * 0.05
				: defaultVelocity + i * 0.05,
			i >= Math.floor(numElem / 2) ? Math.PI : 0
		)
		p.type = 'square'
		// p.radius = 20
		p.radius = defaultWidth
		p.width = defaultWidth
		// p.length = 30
		p.fill = 'fill'
		p.style = `rgba(${randomIntFromInterval(
			153,
			224
		)},${randomIntFromInterval(153, 224)},${randomIntFromInterval(
			153,
			224
		)},0.9)`
		// p.lineWidth = 4
		//type = circle, rectangle, square
		//size = radius, width, length
		//fill = fill, stroke | fillStyle, strokeStyle, lineWidth
		particles.push(p)
		var p = particle.create(
			width / 2,
			padding + i * (defaultWidth + padding) + defaultWidth / 2,
			defaultVelocity2 - i * 0.01,
			i >= Math.floor(numElem / 2) ? Math.PI : 0
		)
		p.type = 'circle'
		// p.radius = 20
		p.radius = defaultWidth / 2
		// p.length = 30
		p.fill = 'fill'
		p.style = `rgba(${randomIntFromInterval(
			153,
			224
		)},${randomIntFromInterval(153, 224)},${randomIntFromInterval(
			153,
			224
		)},0.9)`
		// p.lineWidth = 4
		//type = circle, rectangle, square
		//size = radius, width, length
		//fill = fill, stroke | fillStyle, strokeStyle, lineWidth
		particles.push(p)
	}

	update()
	function update() {
		initializeCanvas()

		for (var i = 0; i < particles.length; i++) {
			p = particles[i]

			p.update()
			context.beginPath()
			switch (p.type) {
				case 'circle':
					context.arc(
						p.position.getX(),
						p.position.getY(),
						p.radius,
						0,
						Math.PI * 2,
						false
					)
					break
				case 'rectangle':
					context.rect(
						p.position.getX(),
						p.position.getY(),
						p.width,
						p.length
					)
					break
				case 'square':
					context.rect(
						p.position.getX(),
						p.position.getY(),
						p.width,
						p.width
					)
					break

				default:
					break
			}
			switch (p.fill) {
				case 'fill':
					context.fillStyle = p.style
					context.fill()
					break
				case 'stroke':
					context.strokeStyle = p.style
					context.lineWidth = p.lineWidth
					context.stroke()
				default:
					break
			}
			bounce(p)
		}
		requestAnimationFrame(update)
	}
	function initializeCanvas() {
		context.clearRect(0, 0, width, height)
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
	}
}

window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var ship = particle.create(width / 2, height / 2, 0, 0),
		thrust = vector.create(0, 0),
		angle = 0,
		turningRight = false,
		turningLeft = false,
		thrusting = false

	update()

	document.body.addEventListener('keydown', function (event) {
		// console.log(event.code)
		// 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'ArrowUp'
		switch (event.code) {
			case 'ArrowUp':
				thrusting = true
				break
			case 'ArrowRight':
				turningRight = true
				break
			case 'ArrowLeft':
				turningLeft = true
				break
			default:
				break
		}
	})
	document.body.addEventListener('keyup', function (event) {
		// console.log(event.code)
		// 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'ArrowUp'
		switch (event.code) {
			case 'ArrowUp':
				thrusting = false
				break
			case 'ArrowRight':
				turningRight = false
				break
			case 'ArrowLeft':
				turningLeft = false
				break
			default:
				break
		}
	})
	function update() {
		context.clearRect(0, 0, width, height)

		if (turningLeft) {
			angle -= 0.05
		}
		if (turningRight) {
			angle += 0.05
		}

		thrust.setAngle(angle)

		if (thrusting) {
			thrust.setLength(0.1)
		} else {
			thrust.setLength(0)
		}

		ship.accelerate(thrust)
		ship.update()

		//Move axis to ship's position
		context.save()
		context.translate(ship.position.getX(), ship.position.getY())
		context.rotate(angle)

		//Draw ship
		context.beginPath()
		context.moveTo(10, 0)
		context.lineTo(-10, -7)
		context.lineTo(-10, 7)
		context.lineTo(10, 0)
		//Draw line for thrust
		if (thrusting) {
			context.moveTo(10, 0)
			context.lineTo(-18, 0)
		}
		context.stroke()

		context.restore()

		if (ship.position.getX() > width) {
			ship.position.setX(0)
		}
		if (ship.position.getX() < 0) {
			ship.position.setX(width)
		}
		if (ship.position.getY() > height) {
			ship.position.setY(0)
		}
		if (ship.position.getY() < 0) {
			ship.position.setY(height)
		}

		requestAnimationFrame(update)
	}
}

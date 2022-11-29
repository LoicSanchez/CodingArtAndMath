window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var p = particle.create(
		width / 2,
		height / 2,
		3,
		Math.random() * Math.PI * 2
	)
	p.radius = 20

	update()

	function update() {
		context.clearRect(0, 0, width, height)

		p.update()

		//Draw
		context.beginPath()
		context.arc(
			p.position.getX(),
			p.position.getY(),
			p.radius,
			0,
			Math.PI * 2,
			false
		)
		context.fillStyle = '#2818d9'
		context.fill()

		wrap(p)

		requestAnimationFrame(update)
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

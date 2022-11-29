window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var sun = particle.create(width / 2, height / 2, 0, 0),
		planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2)

	sun.mass = 20000

	update()
	function update() {
		context.clearRect(0, 0, width, height)

		planet.gravitateTo(sun)
		planet.update()

		context.beginPath()
		context.arc(
			planet.position.getX(),
			planet.position.getY(),
			5,
			0,
			Math.PI * 2,
			false
		)
		context.fillStyle = '#2818d9'
		context.fill()

		context.beginPath()
		context.arc(
			sun.position.getX(),
			sun.position.getY(),
			20,
			0,
			Math.PI * 2,
			false
		)
		context.fillStyle = 'rgba(252, 186, 3, 0.5)'
		context.fill()

		requestAnimationFrame(update)
	}
}

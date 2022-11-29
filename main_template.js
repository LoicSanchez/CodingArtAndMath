window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var position = vector.create(150, 100)

	update()
	function update() {
		context.clearRect(0, 0, width, height)

		// context.beginPath()
		// context.arc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false)
		// context.fill()

		requestAnimationFrame(update)
	}
}

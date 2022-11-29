window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	context.translate(0, height / 2)
	//The Y axis in the browser is "inverted" (from top to bottom, - at the top, + at the bottom)
	context.scale(1, -1)

	for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
		// console.log(Math.sin(angle))
		var x = angle * 200,
			y = Math.sin(angle) * 200

		context.fillRect(x, y, 5, 5)
	}
}

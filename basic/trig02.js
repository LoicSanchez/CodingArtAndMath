window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var centerY = height * 0.5,
		centerX = width * 0.5,
		baseRadius = 100,
		offset = height * 0.4,
		offset2 = 50,
		speed = 0.05,
		angle = 0,
		baseAlpha = 0.5,
		offset3 = 0.5

	// //Function 1: animate movement up and down
	// render()
	// function render() {
	// 	var y = centerY + Math.sin(angle) * offset
	// 	context.clearRect(0, 0, width, height)
	// 	context.beginPath()
	// 	context.arc(centerX, y, 50, 0, Math.PI * 2, false)
	// 	context.fill()

	// 	angle += speed

	// 	requestAnimationFrame(render)
	// }

	// //Function 1b: animate movement side to side
	// render()
	// function render() {
	// 	var x = centerX + Math.sin(angle) * offset
	// 	context.clearRect(0, 0, width, height)
	// 	context.beginPath()
	// 	context.arc(x, centerY, 50, 0, Math.PI * 2, false)
	// 	context.fill()

	// 	angle += speed

	// 	requestAnimationFrame(render)
	// }

	// //Function 2: animate growing radius
	// render()
	// function render() {
	// 	var radius = baseRadius + Math.sin(angle) * offset2
	// 	context.clearRect(0, 0, width, height)
	// 	context.beginPath()
	// 	context.arc(centerX, centerY, radius, 0, Math.PI * 2, false)
	// 	context.fill()

	// 	angle += speed

	// 	requestAnimationFrame(render)
	// }

	//Function 3: animate fade / change of color
	render()
	function render() {
		var alpha = baseAlpha + Math.sin(angle) * offset3
		context.fillStyle = `rgba(0,0,0,${alpha})`
		context.clearRect(0, 0, width, height)
		context.beginPath()
		context.arc(centerX, centerY, 100, 0, Math.PI * 2, false)
		context.fill()

		angle += speed

		requestAnimationFrame(render)
	}
}

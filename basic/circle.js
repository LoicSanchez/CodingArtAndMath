window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var width = (canvas.width = window.innerWidth)
	var height = (canvas.height = window.innerHeight)

	var centerY = height * 0.5,
		centerX = width * 0.5,
		radius = 200,
		xRadius = 200,
		yRadius = 400,
		speed = 0.01,
		angle = 0,
		xSpeed = 0.1,
		xAngle = 0,
		ySpeed = 0.131,
		yAngle = 0,
		x,
		y

	// //Function to animate points along a circle
	// render()
	// function render() {
	//     context.clearRect(0, 0, width, height) //clear the screen
	// 	//calculate x and y
	// 	var x = centerX + Math.cos(angle) * radius
	// 	var y = centerY + Math.sin(angle) * radius

	// 	//Draw a circle at this coordinate
	// 	context.beginPath()
	// 	context.arc(x, y, 10, 0, Math.PI * 2, false)
	// 	context.fill()

	// 	//Update angle to next
	// 	angle += speed

	// 	//Call the function iteratively
	// 	requestAnimationFrame(render)
	// }

	// //Function to animate points along an ellipse
	// render()
	// function render() {
	// 	context.clearRect(0, 0, width, height) //clear the screen
	// 	//calculate x and y
	// 	x = centerX + Math.cos(angle) * xRadius
	// 	y = centerY + Math.sin(angle) * yRadius

	// 	//Draw a circle at this coordinate
	// 	context.beginPath()
	// 	context.arc(x, y, 10, 0, Math.PI * 2, false)
	// 	context.fill()

	// 	//Update angle to next
	// 	angle += speed

	// 	//Call the function iteratively
	// 	requestAnimationFrame(render)
	// }

	//Function to animate points along a Lissajous Curve
	render()
	function render() {
		context.clearRect(0, 0, width, height) //clear the screen
		//calculate x and y
		x = centerX + Math.cos(xAngle) * xRadius
		y = centerY + Math.sin(yAngle) * yRadius

		//Draw a circle at this coordinate
		context.beginPath()
		context.arc(x, y, 10, 0, Math.PI * 2, false)
		context.fill()

		//Update angle to next
		xAngle += xSpeed
		yAngle += ySpeed

		//Call the function iteratively
		requestAnimationFrame(render)
	}
}

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
		angle = 0,
		numObjects = 10,
		slice = (Math.PI * 2) / numObjects,
		x,
		y

	//Create numObjects points along a circle/ellipse
	for (let i = 0; i < numObjects; i++) {
		angle = i * slice

		//calculate x and y (if xRadius = yRadius then we have a circle)
		x = centerX + Math.cos(angle) * xRadius
		y = centerY + Math.sin(angle) * yRadius

		//Draw a point at these coordinates
		context.beginPath()
		context.arc(x, y, 10, 0, Math.PI * 2, false)
		context.fill()
	}
}

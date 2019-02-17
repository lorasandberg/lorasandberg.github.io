var CanvasGame = (function() {
	var me = {};

	// Square root of 3
	var sq3 = 1.7320508075688772935274463415059;
	var hexSize = 50;
	var width, height, containerWidth, windowHeight;
	var canvas, ctx;


	var visited = [];
	var queue = [];


	var pivot;
	var threads = 1;


	me.init = function init() {

		canvas = document.getElementById("background-canvas");
		ctx = canvas.getContext("2d");
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = document.body.clientHeight - 10;

		ctx.fillStyle = "#rgba(0, 123, 255, 1)";

		width = ctx.canvas.width;
		height = ctx.canvas.height;
		containerWidth = document.getElementById("main-title").getBoundingClientRect().width;
		windowHeight = window.innerHeight;

		pivot = { x: width / 2, y: 120 };

		iterate({q:0,r:0}, 0);
	}

	function drawHexAnimated(x, y, size, color, k = 0) {

		drawHex(x, y, size * Math.min(1, k), color);

		if(k < 1)
			setTimeout(function() { drawHexAnimated(x, y, size, color, k + 0.1); }, 10);
	}

	function drawHex(x, y, size, color) {
		color = Math.max(0, Math.min(color, 1)) * 0.7  + 0.1;
		ctx.fillStyle = "hsla(211, 100%, " + Math.floor(color * 100) + "%, 1)";

		size = size * 1.01;
		ctx.beginPath();
		ctx.moveTo(pivot.x + x + size, pivot.y + y);
		ctx.lineTo(pivot.x + x + size / 2, pivot.y + y - size / 2 * sq3);
		ctx.lineTo(pivot.x + x - size / 2, pivot.y + y - size / 2 * sq3);
		ctx.lineTo(pivot.x + x - size, pivot.y + y);
		ctx.lineTo(pivot.x + x - size / 2, pivot.y + y + size / 2 * sq3);
		ctx.lineTo(pivot.x + x + size / 2, pivot.y + y + size / 2 * sq3);
		ctx.closePath();
		ctx.fill();
	}


	function iterate(hex, depth) {
		var pos = hex2pixel(hex);

		if(pos.y + pivot.y > windowHeight + window.scrollY) {
			setTimeout(function() { iterate(hex, depth); }, 100);
		}
		else {
			if(!hasBeenChecked(hex)) {

				visited.push(hex);

				var distanceFromBorders = Math.min(pivot.y + pos.y - 50, Math.min(pivot.x + pos.x, Math.abs(pivot.x + pos.x - width)));

				if(getCircle(hex) < 3 || Math.pow(Math.random(), 1.1) > 
					distanceFromBorders / 300) {
					drawHexAnimated(pos.x, pos.y, hexSize, distanceFromBorders / 400 + (Math.random() - 0.5) * 2 * 0.2);
				}

				pos.x += pivot.x; pos.y += pivot.y;

				if(isValidPosition(pos)) {

					var neighbors = getNeighbors(hex);
					for(var i = 0; i < 6; i++) {
						queue.push(neighbors[i]);
					}
				}
			}	

			if(queue.length > 0)
				setTimeout(function() { iterate(queue.shift(), depth + 1); }, 10);

			if(threads < 3 && depth > 20){
				threads++;
				setTimeout(function() { iterate(queue.shift(), depth + 1); }, 5);
			}
		}
	}



	function hasBeenChecked(hex) {

		for(var i = 0; i < visited.length; i++) {
			if(visited[i].q == hex.q && visited[i].r == hex.r)
				return true;
		}
		return false;
	}

	function getCircle(hex){
		return Math.max(Math.abs(hex.q + hex.r), Math.max(hex.q, hex.r));
	}

	function isValidPosition(point) {
		if(!(point.y > 0 && point.y < height && point.x > 0 && point.x < width))
			return false;

		if(point.y > 200 && 
			Math.abs(point.x - pivot.x) < (containerWidth / 2) * 1.2)
			return false;

		return true;
	}

	function hex2pixel(hex) {
		var x = hexSize * (3.0 / 2 * hex.q);
		var y = hexSize * (sq3 / 2 * hex.q + sq3 * hex.r);
		return { x: x, y: y };
	}

	function getNeighbors(hex) {
		var neighs = [];
		neighs.push({ q: hex.q + 1, r: hex.r });
		neighs.push({ q: hex.q - 1, r: hex.r });
		neighs.push({ q: hex.q + 1, r: hex.r - 1 });
		neighs.push({ q: hex.q - 1, r: hex.r + 1 });
		neighs.push({ q: hex.q, r: hex.r + 1});
		neighs.push({ q: hex.q, r: hex.r - 1});
		return neighs;
	}

	return me;
})();

$(document).ready(function() {

	setTimeout(function() { CanvasGame.init() }, 500);
});
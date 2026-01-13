var HexBackground = (function() {
	var me = {};

	// Square root of 3
	var sq3 = 1.7320508075688772935274463415059;
	var hexSize = 60;
	var width, height, containerWidth, windowHeight;
	var canvas, ctx;


	var visited = []; // Keep record of which nodes have been checked.
	var queue = []; // Nodes to check.


	var pivot; // Center and starting point of the hex map.
	var threads = 1; // How many nodes are to be checked at the same time.

	var run = 0; // ID of the current run of the animation, used for reset purposes.


	me.init = function init() {

		canvas = document.getElementById("background-canvas");
		ctx = canvas.getContext("2d");
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = document.body.clientHeight - 10;

		ctx.fillStyle = "#rgba(0, 123, 255, 1)";

		width = ctx.canvas.width;
		height = ctx.canvas.height;
		containerWidth = document.getElementById("name_title").getBoundingClientRect().width;
		windowHeight = window.innerHeight;

		pivot = { x: width / 2, y: 120 };

		run = run + 1;

		iterate({q:0,r:0}, 0, run);
	}

	me.reset = () => {

		ctx.clearRect(0,0,canvas.width,canvas.height);

		visited = []
		queue = []

		me.init();
	}

	function drawHexAnimated(x, y, size, color, k = 0) {

		drawHex(x, y, size * Math.min(1, k), color);

		if(k < 1)
			setTimeout(function() { drawHexAnimated(x, y, size, color, k + 0.1); }, 10);
	}

	function drawHex(x, y, size, color) {
		color = ((color * 2645 + 2645) % 1);
		color = Math.max(0, Math.min(color, 1)) * 0.7  + 0.1;
		ctx.fillStyle = "hsla(" + Math.floor(color * 30 + 20) + ", 100%, 50%, 1)";

		const abs_position = { x: pivot.x + x, y: pivot.y + y };
		const hex_long_radius = size;
		const hex_short_radius = size / 2 * sq3;

		size = size * 1.01;
		ctx.beginPath();
		ctx.moveTo(abs_position.x + hex_long_radius, 		abs_position.y);
		ctx.lineTo(abs_position.x + hex_long_radius / 2, 	abs_position.y - hex_short_radius);
		ctx.lineTo(abs_position.x - hex_long_radius / 2, 	abs_position.y - hex_short_radius);
		ctx.lineTo(abs_position.x - hex_long_radius, 		abs_position.y);
		ctx.lineTo(abs_position.x - hex_long_radius / 2, 	abs_position.y + hex_short_radius);
		ctx.lineTo(abs_position.x + hex_long_radius / 2, 	abs_position.y + hex_short_radius);
		ctx.closePath();
		ctx.fill();
	}


	function iterate(hex, depth, run_id) {

		if (run_id != run)
			return;

		var pos = hex2pixel(hex);
		const abs_pos = { x: pos.x + pivot.x, y: pos.y + pivot.y };

		// Don't update hex animation below than where the user has scrolled.
		if(pos.y + pivot.y > windowHeight + window.scrollY) { 
			
			setTimeout(function() { iterate(hex, depth, run_id); }, 100);
		}
		else {
			if(!hasBeenChecked(hex) && isValidPosition(abs_pos)) {

				visited.push(hex);

				var distanceFromBorders = Math.min(pivot.y + pos.y - 200, Math.min(pivot.x + pos.x, Math.abs(pivot.x + pos.x - width)));

				// Hex is valid, but we still randomize whether to draw it to create more interesting patterns.
				if(getCircle(hex) < 3 || Math.pow(Math.random(), 1.1) > distanceFromBorders / 300) {
					drawHexAnimated(pos.x, pos.y, hexSize, distanceFromBorders / 400 + (Math.random() - 0.5) * 2 * 0.2);
				}

				// Add the neighbors of the hex to the queue.
				var neighbors = getNeighbors(hex);
				for(var i = 0; i < 6; i++) {
					queue.push(neighbors[i]);
				}
			
			}	

			if(queue.length > 0)
				setTimeout(function() { iterate(queue.shift(), depth + 1, run_id); }, 10);

			if(threads < 3 && depth > 20){
				threads++;
				setTimeout(function() { iterate(queue.shift(), depth + 1, run_id); }, 5);
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

		// Point is within the bounds of the screen.
		if(point.y < -hexSize || point.x < -hexSize || point.x > width + hexSize || point.y > height + hexSize)
			return false;

		const border_factor = from_border_to_content_factor(point)

		// Is the point over the content area.
		if(point.y > 250 && border_factor >= 1)
			return false;

		return true;
	}

	// Returns a value between 0 and 1 depending how close the point is to the content area. (0, point is at the edge of the screen, 1+ point is in the content area
	function from_border_to_content_factor(point) {
		const point_distance_from_edge = Math.min(point.x, width - point.x); // How far the point is from window edges.
		const container_distance_from_edge = (width - containerWidth) / 2; // Basically width of the gap between window edges and content area.

		return Math.max(0, Math.min(1, point_distance_from_edge / (container_distance_from_edge + 35)))
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

setTimeout(() => { HexBackground.init() }, 500);
window.addEventListener("resize", (e) => HexBackground.reset());
const settings = {
	startingPoint: { x: 0, y: window.innerHeight / 3 },
	maxThreadCount: 5,


	// Additional criterias for what positions for hexes are valid. The script already discards out-of-screen hexes.
	validityFunction: (hex, position) => {
		return true
	},

	// For a given valid hex, what is the probability that it's drawn instead of being discarded.
	// Used to create random variance to the patterns.
	probabilityFunction: (hex, position) => {
		const xR = position.x / (window.innerWidth + 500);
		return Math.random() > xR;
	},

	// For determining hex color
	colorFunction: (hex, position) => {
		return (Math.random() - 0.5) * 2 * 0.2;
	}
}


const getCircle = (hex) => {
	return Math.max(Math.abs(hex.q + hex.r), Math.max(hex.q, hex.r));
}

/* Previous validity function: */
const landingPageFunction = (hex, position) => {

	function from_border_to_content_factor(point) {
		const point_distance_from_edge = Math.min(point.x, width - point.x); // How far the point is from window edges.
		const container_distance_from_edge = (width - containerWidth) / 2; // Basically width of the gap between window edges and content area.

		return Math.max(0, Math.min(1, point_distance_from_edge / (container_distance_from_edge + 35)))
	}

	const border_factor = from_border_to_content_factor(point)

	// Is the point over the content area.
	if(point.y > 250 && border_factor >= 1)
		return false;

	return true;
}

/* Previous probability function: */

const landingPageProbability = (hex, position) => {
	var distanceFromBorders = Math.min(pivot.y + pos.y - 200, Math.min(pivot.x + pos.x, Math.abs(pivot.x + pos.x - width)));

	// Hex is valid, but we still randomize whether to draw it to create more interesting patterns.
	return (getCircle(hex) < 3 || Math.pow(Math.random(), 1.1) > distanceFromBorders / 300)
}


var HexBackground = (function() {
	var me = {};

	// Square root of 3
	var sq3 = 1.7320508075688772935274463415059;
	var hexSize = 40;
	var width, height, containerWidth, windowHeight;
	var canvas, ctx;

	var probabilityFunction;
	var validityFunction;
	var colorFunction;

	var visited = []; // Keep record of which nodes have been checked.
	var queue = []; // Nodes to check.


	var pivot; // Center and starting point of the hex map.
	var threads = 1; // How many nodes are to be checked at the same time.
	var maxThreadCount = 3;

	var run = 0; // ID of the current run of the animation, used for reset purposes.

	me.init = function init(settings) {

		canvas = document.getElementById("background-canvas");
		ctx = canvas.getContext("2d");
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;

		width = ctx.canvas.width;
		height = ctx.canvas.height;

		
		ctx.fillStyle = "#fff";
		ctx.fillRect(0,0,width,height);

		containerWidth = 100; //document.getElementById("name_title").getBoundingClientRect().width;
		windowHeight = window.innerHeight;

		pivot = settings.startingPoint;
		probabilityFunction = settings.probabilityFunction;
		validityFunction = settings.validityFunction;
		colorFunction = settings.colorFunction;

		run = run + 1;

		iterate({q:0,r:0}, 0, run);
	}

	me.reset = () => {

		// Reset only if window size actually changes.
		if(Math.abs(canvas.width - window.innerWidth) > 10 || Math.abs(canvas.height - window.innerHeight) > 10) {
			ctx.clearRect(0,0,canvas.width,canvas.height);

			visited = []
			queue = []

			me.init();
		}
	}

	function drawHexAnimated(clientPosition, size, color, k = 0) {

		drawHex(clientPosition, size * Math.min(1, k), color);

		if(k < 1)
			setTimeout(function() { drawHexAnimated(clientPosition, size, color, k + 0.1); }, 10);
	}

	function drawHex(clientPosition, size, color) {
		const { x, y } = clientPosition;

		color = ((color * 2645 + 2645) % 1);
		color = Math.max(0, Math.min(color, 1)) * 0.7  + 0.1;
		ctx.fillStyle = "hsla(" + Math.floor(color * 30 + 20) + ", 90%, 60%, 1)";
		const hex_long_radius = size;
		const hex_short_radius = size / 2 * sq3;

		size = size * 1.01;
		ctx.beginPath();
		ctx.moveTo(x + hex_long_radius, 		y);
		ctx.lineTo(x + hex_long_radius / 2, 	y - hex_short_radius);
		ctx.lineTo(x - hex_long_radius / 2, 	y - hex_short_radius);
		ctx.lineTo(x - hex_long_radius, 		y);
		ctx.lineTo(x - hex_long_radius / 2, 	y + hex_short_radius);
		ctx.lineTo(x + hex_long_radius / 2, 	y + hex_short_radius);
		ctx.closePath();
		ctx.fill();
	}


	function iterate(hex, depth, run_id) {

		if (run_id != run) return;
		if (typeof(hex) === "undefined") return;

		const hexmapPosition = hex2pixel(hex);
		const clientPosition = { x: hexmapPosition.x + pivot.x, y: hexmapPosition.y + pivot.y }

		// Don't update hex animation below than where the user has scrolled.
		if(false && clientPosition.y > windowHeight + window.scrollY) { 
			
			setTimeout(function() { iterate(hex, depth, run_id); }, 100);
		}
		else {
			if(!hasBeenChecked(hex) && isValidPosition(hex, clientPosition)) {

				visited.push(hex);

				//var distanceFromBorders = Math.min(pivot.y + pos.y - 200, Math.min(pivot.x + pos.x, Math.abs(pivot.x + pos.x - width)));

				// Hex is valid, but we still randomize whether to draw it to create more interesting patterns.
				if(probabilityFunction(hex, clientPosition)) {
					drawHexAnimated(clientPosition, hexSize, colorFunction(hex, clientPosition));
				}

				// Add the neighbors of the hex to the queue.
				var neighbors = getNeighbors(hex);
				for(var i = 0; i < 6; i++) {
					queue.push(neighbors[i]);
				}
			
			}	

			if(queue.length > 0)
				setTimeout(function() { iterate(getQueueItem(), depth + 1, run_id); }, 10);

			if(threads < 3 && depth > 20){
				threads++;
				setTimeout(function() { iterate(getQueueItem(), depth + 1, run_id); }, 5);
			}
		}
	}

	function getQueueItem() {

		const i = Math.floor(Math.random() * queue.length);

		return queue.splice(i, 1).shift();
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

	function isValidPosition(hex, point) {

		// Point is within the bounds of the screen.
		if(point.y < -hexSize || point.x < -hexSize || point.x > width + hexSize || point.y > height + hexSize)
			return false;

		if(!validityFunction(hex, point)) 
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

setTimeout(() => { HexBackground.init(settings) }, 500);
//window.addEventListener("resize", (e) => HexBackground.reset());
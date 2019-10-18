var cols, rows;
var w = 20;
var grid = [];

var current;

var stack = [];

function setup() {
	createCanvas(800, 800);
	cols = floor(width / w);
	rows = floor(height / w);

	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < rows; i++) {
			var cell = new Cell(i, j);
			grid.push(cell);
		}
	}

	current = grid[0];
}

function draw() {
	background(51);
	for (let i = 0; i < grid.length; i++) {
		grid[i].show();
	}

	current.visited = true;
	var next = current.checkNeighbors();
	if (next) {
		next.visited = true;
		stack.push(current);
		next.highlight()
		removeWalls(current, next);
		current = next;
	} else {
		if (stack.length > 0) {
			var cell = stack.pop();
			current = cell;
		}
	}

	function removeWalls(current, next) {
		var x = current.i - next.i;
		var y = current.j - next.j;

		if (x === 1) {
			current.walls[3] = false;
			next.walls[1] = false;
		} else {
			current.walls[1] = false;
			next.walls[3] = false;
		}

		if (y === 1) {
			current.walls[0] = false;
			next.walls[2] = false;
		} else {
			current.walls[2] = false;
			next.walls[0] = false;
		}
	}
}
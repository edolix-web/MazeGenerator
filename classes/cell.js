class Cell {
	constructor(i, j) {
		this.i = i;
		this.j = j;
		this.walls = [true, true, true, true];
		this.visited = false;
	}

	show = function () {
		var x = this.i * w;
		var y = this.j * w;


		stroke(255);

		if (this.walls[0])
			line(x, y, x + w, y);
		if (this.walls[1])
			line(x + w, y, x + w, y + w);
		if (this.walls[2])
			line(x + w, y + w, x, y + w);
		if (this.walls[3])
			line(x, y + w, x, y);

		if (this.visited) {
			noStroke();
			fill(255, 0, 255, 100);
			rect(x, y, w, w);
		}
	}

	index(i, j) {
		if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
			return -1;
		}
		return i + j * cols;
	}

	checkNeighbors = function () {
		var neighbors = [];
		var top = grid[this.index(this.i, this.j - 1)];
		var right = grid[this.index(this.i + 1, this.j)];
		var bottom = grid[this.index(this.i, this.j + 1)];
		var left = grid[this.index(this.i - 1, this.j)];

		if (top && !top.visited) {
			neighbors.push(top);
		}
		if (right && !right.visited) {
			neighbors.push(right);
		}
		if (bottom && !bottom.visited) {
			neighbors.push(bottom);
		}
		if (left && !left.visited) {
			neighbors.push(left);
		}

		if (neighbors.length > 0) {
			return random(neighbors);
		} else {
			return undefined;
		}
	}

	highlight = function () {
		var x = this.i * w;
		var y = this.j * w;
		noStroke();
		fill(0, 0, 255, 100);
		rect(x, y, w, w);
	}
}
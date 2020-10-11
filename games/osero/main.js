var context = canvas.getContext('2d');

var board = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];

var N = 4;


var cx = 100 * N;
var cy = 100 * N;

context.fillStyle = 'black';
context.lineWidth = 10;
for(var i = 0; i < N; i++) {
	for(var ii = 0; ii < N; ii++) {
		context.fillStyle = 'limegreen';
		context.fillRect(100 + 100 * ii, 100 + 100 * i, 100, 100);
		context.fillStyle = 'black';
		context.strokeRect(100 + 100 * ii, 100 + 100 * i, 100, 100);
		if(board[i][ii] == 1) {
			context.fillStyle = 'black';
			context.arc(100 + 100 * ii + 50, 100 + 100 * i + 50, 40, 0, 2*Math.PI, false);
			context.fill();
		}

		else if(board[i][ii] == 2) {
			context.fillStyle = 'white';
			context.arc(100 + 100 * ii + 50, 100 + 100 * i + 50, 40, 0, 2*Math.PI, false);
			context.fill();
		}
	}
}

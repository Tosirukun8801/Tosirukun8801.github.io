const fs = require('fs');
const csv = require('csv');

while (true) {
	fs.createReadStream('C:\Users\hibic\Desktop\サーバー\Tosirukun8801 Server\money server - コピー\plugins\Skript\variables.csv')
	.pipe(csv.parse(function(err, data) {
		console.log(data);
	}))
}
var fs = require('fs');

var buffer, lines;


function counter(callback) {
	fs.readFile(process.argv[2], function (err, data) {
		buffer = data.toString();
		lines = buffer.split('\n');
		callback();
	});
}

function logMyNumber() {
	console.log("There are "+(lines.length)+" new lines in the "+process.argv[2]+" file.");

}

counter(logMyNumber);

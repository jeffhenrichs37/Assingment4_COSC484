var numOfArgs = process.argv.length - 2;
var sum = 0;

for (var i = 0; i < numOfArgs; i++)
{
	var integer = parseInt(process.argv[2+i]);
	sum = sum + integer;
}

console.log(sum);

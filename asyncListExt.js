var fs = require('fs');

var secArg = process.argv[3];
var firstArg = process.argv[2];
var arr = [];
var x = 0;


function listFiles(files){
	
	for(var i = 0; i < files.length; i++)
	{
		var extension = files[i].split('.').pop();
		var tempExt = ".";
		
		tempExt = tempExt.concat(extension);
		extension = tempExt;
		
		//console.log(extension);
		
		if(extension == secArg)
		{
			files[i].concat(extension);
			arr[x] = files[i];
			x++;
		}
	}
	
	console.log(arr);
};


function counter(callback){
	fs.readdir(firstArg, (err, files)=>{
		if (err){
			throw err;
		}
		callback(files);
	});
}

counter(listFiles);
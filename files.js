const fs = require('node:fs');
const readline = require('node:readline');

const fileStream = fs.createReadStream('./hello.txt', 'utf8');

const rl = readline.createInterface({
	input: fileStream,
	crlfDelay: Infinity,

});

rl.on('line', (line) => {
	console.log(`line:${line}`);
})

rl.on('close', () => {
	console.log("finished");
})

//fs.readFile('./hello.txt', 'utf8', (err, data) =>{
//	if(err) {
//		console.error(err)
//		return;
//	}
//	else{
//		console.log(data);
//	}
//});
//
//const content = '\n\n\nwhatsup';
//
//fs.writeFile('./hello.txt', content,{flag: 'a+'}, err =>{
//	if(err) {
//		console.error(err)
//		return;
//	}
//	else{
//
//	}
//})

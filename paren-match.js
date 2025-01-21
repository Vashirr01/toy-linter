const fs = require('node:fs');
const isComplete = require('./paren-match.js')
const readline = require('node:readline');

const fileStream = fs.createReadStream('./unmatching.js', 'utf8');

const rl = readline.createInterface({
	input: fileStream,
	crlfDelay: Infinity,

});

const stack = []
let lineNo = 0

//fs.readFile('./matching.js', 'utf8', (err, data) =>{
//	if(err) {
//		console.error(err)
//		return;
//	}
//	else{
//		console.log(isComplete(data));
//	}
//});
//
//fs.readFile('./unmatching.js', 'utf8', (err, data) =>{
//	if(err) {
//		console.error(err)
//		return;
//	}
//	else{
//		console.log(isComplete(data));
//	}
//});

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
//
//TODO check if it's a non bracket
function isComplete(string) {

	for(let i =0; i<string.length; i++){

		if(string[i] === "{" || string[i] === "[" || string[i] === "("){
			stack.push(string[i])
			continue;
		}

		if(stack.length === 0) {
		if(string[i] === "}" || string[i] === "]" || string[i] === ")"){
				return false;
			}
		}

		if(stack.length !== 0){
		if(string[i] === "}") {
			if(stack.pop() !== "{"){
			return false;
			}
		}
		if(string[i] === ")") {
			if(stack.pop() !== "("){
			return false;
			}
		}
		if(string[i] === "]") {
			if(stack.pop() !== "["){
			return false;
			}
		}
		}
	}

	return stack.length === 0
}

rl.on('line', (line) => {
	console.log(isComplete(line))
	if(isComplete(line) === false) {
		console.error(`error at line ${lineNo}`)
		lineNo++
	}
})

rl.on('close', () => {
	console.log("finished");
})



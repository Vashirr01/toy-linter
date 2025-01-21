const fs = require('node:fs');
const readline = require('node:readline');

function matches(open, close){
	return (
	(open === "{" && close === "}") ||
	(open === "[" && close === "]") ||
	(open === "(" && close === ")")
	)
}

function isComplete(string) {

	let stack = []
	let positionStack = []
	let lineNo = 1
	let column = 0

	for(let i =0; i<string.length; i++){

		column++
		if(string[i] === "\n"){
			lineNo++
			column = 0
			continue
		}

		if(string[i] === "{" || string[i] === "[" || string[i] === "("){
			stack.push(string[i])
			positionStack.push({line: lineNo, column: column})
			continue;
		}

		if(string[i] === "}" || string[i] === "]" || string[i] === ")"){
		if(stack.length === 0) {
				 console.error(`unmatched parenthesis '${string[i]}' at line ${lineNo} column ${column}`)
				continue
			}

		const lastOpen = stack.pop()
		const lastPosition = positionStack.pop()

		if(!matches(lastOpen, string[i])) {
			console.error(`unmatched parenthesis '${string[i]}' and '${lastOpen}' at line ${lastPosition.line} column ${lastPosition.column}`)
		}
		}

	}

	while(stack.length > 0){
		const lastOpen = stack.pop()
		const lastPosition = positionStack.pop()
		console.error(`missing parenthesis for '${lastOpen}' at line ${lastPosition.line} column ${lastPosition.column}`)
	}
}

fs.readFile('./matching.js', 'utf8', (err, data) =>{
	if(err) {
		console.error(err)
		return;
	}
	else{
		console.log("starting matching.js")
		isComplete(data);
		console.log("finished matching.js")
	}
});

fs.readFile('./unmatching.js', 'utf8', (err, data) =>{
	if(err) {
		console.error(err)
		return;
	}
	else{
		console.log("starting unmatching.js")
		isComplete(data);
		console.log("finished unmatching.js")
	}
});



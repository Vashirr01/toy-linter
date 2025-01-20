//TODO check if it's a non bracket
function isComplete(string) {

	const stack = []

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

console.log(isComplete("(){}[]")); // true
console.log(isComplete("{[]}()")); // true
console.log(isComplete("([{}])")); // true
console.log(isComplete("{{{{{}}}}}[][][](()()())")); // true
console.log(isComplete("((((()))))")); // true
console.log(isComplete("{}[](){}[]")); // true
console.log(isComplete("(())(())(())")); // true
console.log(isComplete("[[[]]](){{}}")); // true
console.log(isComplete("([]{}()[])")); // true
console.log(isComplete("{{[[(())]]}}"));  // true

console.log(isComplete("(]")); // false
console.log(isComplete("[)")); // false
console.log(isComplete("{]")); // false
console.log(isComplete("([)]")); // false
console.log(isComplete("}][")); // false
console.log(isComplete("((((")); // false
console.log(isComplete("]]]")); // false
console.log(isComplete("{{{{")); // false
console.log(isComplete("[[[]]]]{}")); // false
console.log(isComplete("(())()(]")); // false

console.log(isComplete("{[}]}(())")); // false
console.log(isComplete("[({})]()]")); // false
console.log(isComplete("([({})]")); // false
console.log(isComplete("([]{})(}")); // false
console.log(isComplete("{([])}]")); // false



function exampleOne() {
    if (true) {
        console.log("Unmatched braces example";
    } // Missing closing parenthesis above
}

function exampleTwo() {
    let arr = [1, 2, 3;
    console.log(arr);
} // Missing closing square bracket in array declaration

function exampleThree() {
    if (true) {
        console.log("This has no issues");
    }
}

function exampleFour() {
    let obj = {
        key1: "value1",
        key2: "value2"
    ; // Incorrect closing syntax
    console.log(obj);
}

function exampleFive() {
    if (true {
        console.log("Missing closing parenthesis for the if statement");
    }
}

function exampleSix() {
    let anotherArr = [
        { key: "value" },
        { key: "value2" }
        // Missing closing square bracket for the array
    console.log(anotherArr);
}

function exampleSeven() {
    console.log("Properly matched braces and parentheses!");
}

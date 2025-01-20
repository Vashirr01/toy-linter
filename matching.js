
function exampleOne() {
    if (true) {
        console.log("All parentheses, braces, and brackets are matched!");
    }
}

function exampleTwo() {
    let arr = [1, 2, 3, 4];
    console.log(arr);
}

function exampleThree() {
    let obj = {
        key1: "value1",
        key2: "value2",
    };
    console.log(obj);
}

function exampleFour() {
    for (let i = 0; i < 5; i++) {
        console.log("Iteration:", i);
    }
}

function exampleFive() {
    let nestedArr = [
        { key: "value1" },
        { key: "value2" },
    ];
    console.log(nestedArr);
}

function exampleSix() {
    const sum = (a, b) => {
        return a + b;
    };

    console.log("Sum of 3 and 5:", sum(3, 5));
}

function exampleSeven() {
    try {
        console.log("This block has matching braces!");
    } catch (error) {
        console.error("Error:", error);
    }
}

function exampleEight() {
    (function () {
        console.log("Self-invoking function with matching parentheses!");
    })();
}

exampleOne();
exampleTwo();
exampleThree();
exampleFour();
exampleFive();
exampleSix();
exampleSeven();
exampleEight();

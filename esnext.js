/* Speaker Notes:
    JavaScript is the language. ECMAScript is the specification it’s based on.                                
    When people call JavaScript a “dialect of the ECMAScript language,” they mean it in the same sense as when talking about English, French, or Chinese dialects.
    A dialect derives most of its lexicon and syntax from its parent language, but deviates enough to deserve distinction.
    JavaScript mostly implements the ECMAScript specification as described in ECMA-262, but a handful of differences do exist.
    
    The Vue webpack project template includes Babel in its build process so we can use features from future versions 
    of JavaScript today and still support older browsers.

    Babel: https://babeljs.io/learn-es2015/ 
    ES6 Cheatsheet: https://github.com/lukehoban/es6features
 */

// Template Strings
const city = 'Paris';
console.log(`Welcome to ${city}! Enjoy your stay.`)

// Object Destructuring
const obj = { a: 1, b: true, c: 'c' };
const { a, b } = obj;
console.log(a, b); // 1, true

// Array Destructuring
const [x, y, ...rest] = [10, 20, 30, 40, 50];
console.log(x, y, rest); // 10, 20, [30, 40, 50]

// Default Values
function logMessage(message = 'Hello World') {
    console.log(message);
}

logMessage('JavaScript Rocks!'); // 'TypeScript Rocks!'
logMessage(); // 'Hello World'

// Arrow Functions
const isEven = n => {
    return n % 2 === 0;
};

console.log(isEven(2)); // true

const squares = [1, 2, 3, 4, 5].map(x => x * x);

// for of
for(let val of squares) {
    console.log(val);
}

// async, await
function sleep(timeout) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`Slept for ${timeout / 1000} seconds.`);
        resolve();
    }, timeout));
}

async function asyncFn() {
    await sleep(2000);
    console.log('Should print after sleep fn call.');
}

asyncFn();
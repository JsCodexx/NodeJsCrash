const fs = require("node:fs");

// fs.readFile(__filename, () => console.log("this is readfile 1"));

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise 1 "));

("output");
// {this is process.nextTick 1
// this is promise 1
// this is readfile 1}
// so the even loop process teh microtask q before i/o q

// setTimeout(() => console.log("this is settimeout 1"), 0);

// fs.readFile(__filename, () => console.log("this is readfile 1"));

("output");
// {this is settimeout 1
// this is readfile 1}
// the output could be reverse too the point here is that when the settimeout with 0s is run with i/o there is no guarantee of output

fs.readFile(__filename, () => console.log("this is readfile 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise 1 "));
setTimeout(() => console.log("this is settimeout 1"), 0);

for (let i = 0; i < 2000000; i++) {}

("Output");
// {this is process.nextTick 1
// this is promise 1
// this is settimeout 1
// this is readfile 1}
// I/O q callbakcs are run after the microtaskt and timer task callbaks

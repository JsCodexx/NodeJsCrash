const fs = require("node:fs");

// fs.readFile(__filename, () => console.log("this is readfile 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise 1 "));
// setTimeout(() => console.log("this is settimeout 1"), 0);
// setImmediate(() => console.log("this is set immediate"));
// for (let i = 0; i < 2000000; i++) {}

("OutPut");
// {this is process.nextTick 1
// this is promise 1
// this is settimeout 1
// this is set immediate
// this is readfile 1}
// I/O events are polled and callback functions  are added  to the I/O queue only after  the I/O is complete

// fs.readFile(__filename, () => {
//   console.log("this is readfile 1");
//   setImmediate(() => console.log("this is set immediate"));
// });
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise 1 "));
// setTimeout(() => console.log("this is settimeout 1"), 0);
// for (let i = 0; i < 2000000; i++) {}

("OutPut");
// {this is process.nextTick 1
// this is promise 1
// this is settimeout 1
// this is readfile 1
// this is set immediate}

// fs.readFile(__filename, () => {
//   console.log("this is readfile 1");
//   setImmediate(() => console.log("this is set immediate"));
//   process.nextTick(() => console.log("this is inner process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is inner promise 1 "));
// });
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise 1 "));
// setTimeout(() => console.log("this is settimeout 1"), 0);
// for (let i = 0; i < 2000000; i++) {}

("OutPut");
// {this is process.nextTick 1
// this is promise 1
// this is settimeout 1
// this is readfile 1
// this is inner process.nextTick 1
// this is inner promise 1
// this is set immediate}
// Microtask q callbaks are  exe after I/O cb and before check Q callbacks

setTimeout(() => console.log("this is settimeout 1"), 0);
setTimeout(() => {
  console.log("this is settimeout 2");
  process.nextTick(() => console.log("this is process.nextTick inside"));
  Promise.resolve().then(() => console.log("this is promise 1 inside"));
}, 0);
setTimeout(() => console.log("this is settimeout 3"), 0);

("OutPut");
// {this is settimeout 1
// this is settimeout 2
// this is process.nextTick inside
// this is promise 1 inside
// this is settimeout 3}
// MicroTask q cb are exe in betweeen the check Q cb

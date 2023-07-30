// console.log("one");
// process.nextTick(() => {
//   console.log("this is process.nextTick 1");
// });
// console.log("two");

// Promise.resolve().then(() => {
//   console.log("this is promise one");
// });
// process.nextTick(() => {
//   console.log("this is next tick");
// });

// Next tick takes priority over promise in event loop, and once the control is in nextTick queue all of the cb will be executed first
// And than the promise queue will be executed

process.nextTick(() => {
  console.log("this is process.nextTick 1");
});
process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() => {
    console.log("this is inner nextTick in the next tick");
  });
});

process.nextTick(() => {
  console.log("this is process next tick 3");
});

Promise.resolve().then(() => {
  console.log("this is promise 1");
});

Promise.resolve().then(() => {
  console.log("this is promise 2");
  process.nextTick(() => {
    console.log("this is next tick inside promise block");
  });
});

Promise.resolve().then(() => {
  console.log("this is promise 3");
});

("output");

// one
// two
// this is process.nextTick 1
// this is next tick
// this is promise one

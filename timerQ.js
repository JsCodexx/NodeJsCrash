setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
  console.log("this is setTimeout 2");
  process.nextTick(() => {
    console.log("this is process next tick 3");
  });
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

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

// this is process.nextTick 1
// this is process.nextTick 2
// this is process next tick 3
// this is inner nextTick in the next tick
// this is promise 1
// this is promise 2
// this is promise 3
// this is next tick inside promise block
// this is setTimeout 1
// this is setTimeout 2
// this is setTimeout 3

// This is bcz all promise and nextTick goes into microTask , and unless the whole microtask q is free than the timer q gets to execute

// after every run of timer q the process moves to the microtask q to check if ther is anything to run and than comes back to the timer
// ****************This is the output when you put a process.nextTick insidte a settimeout like in line 4
// this is process.nextTick 1
// this is process.nextTick 2
// this is process next tick 3
// this is inner nextTick in the next tick
// this is promise 1
// this is promise 2
// this is promise 3
// this is next tick inside promise block
// this is setTimeout 1
// this is setTimeout 2
// this is process next tick 3
// this is setTimeout 3


// CALL BACKS are run in first in first out order like the one with the less time will execute first bcz it is going to enter first
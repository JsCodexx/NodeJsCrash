const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();
readableStream.on("close", () => {
  console.log("this is from readable stream close event callback");
});
setImmediate(() => console.log("this is setImmediate 1"), 0);
setTimeout(() => {
  console.log("this is settimeout 1");
}, 0);
Promise.resolve().then(() => console.log("this is promise 1"));
process.nextTick(() => {
  console.log("this is process next tick 1");
});

("Output");
// {this is process next tick 1
// this is promise 1
// this is settimeout 1
// this is setImmediate 1
// this is from readable stream close event callback}
// Close Q cb are exe after all q  cb are executed

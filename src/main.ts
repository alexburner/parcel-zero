//
// Test lack of Synthetic Default Imports
//
import * as d3 from "d3";
d3.arc(); // No auto-fix if import missing

//
// Test Web Worker
//
const worker = new Worker("./worker.ts");
worker.addEventListener("message", e => {
  const data: unknown = JSON.parse(e.data);
  console.log("Main thread received message from worker:", data);
});
worker.postMessage(JSON.stringify({ foo: "bar" }));

//
// Test Dynamic Imports
//
setTimeout(() => {
  import("./dynamic").then(dynamic => dynamic.foo());
}, 1000);

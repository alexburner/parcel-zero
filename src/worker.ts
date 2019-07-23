const context = self as any;

context.addEventListener("message", e => {
  const data: unknown = JSON.parse(e.data);
  console.log("Worker thread received message from host:", data);
  context.postMessage(JSON.stringify({ bar: "foo" }));
});

import net from "node:net";

const socket = net.createConnection({ host: "192.168.68.11", port: 4000 });

socket.on("error", () => {
  console.log("Server Lost");
});

setTimeout(() => {
  socket.write("Hii");
  socket.end();
}, 10000);

socket.on("data", (chunk) => {
  console.log(chunk.toString());
});

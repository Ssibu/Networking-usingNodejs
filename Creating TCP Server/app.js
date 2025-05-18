import net from "node:net";

const server = net.createServer();

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message.");
    socket.end();
  });
  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });
  console.log("Client Connected", socket.remoteAddress);
});

// server.on("listening", () => {
//   console.log("Server started on port 4000");
// });

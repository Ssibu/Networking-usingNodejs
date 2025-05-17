import dgram from 'node:dgram';

const socket = dgram.createSocket("udp4");
console.log(socket)
socket.on("message", (message, remoteAddress) => {
    console.log(message.toString())
    console.log(remoteAddress)
})
socket.send("Hi from Node.js", 4000,"192.168.68.11");
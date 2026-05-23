// server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public")); // serve frontend files

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  // Listen for a message from client
  socket.on("chatMessage", (msg) => {
    console.log("Message from client:");

    // Broadcast the message to all connected clients
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

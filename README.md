# 🔌 Websocket Real-Time Chat Server

A low-latency, real-time messaging hub built using **Express.js** and **Socket.io**. The platform demonstrates event-driven client-server connections and instant message broadcasting.

---

## ⚡ Operational Features
* **Connection Lifecycle**: Tracks client connect/disconnect status with automated server logging.
* **Global Message Broadcasts**: Receives incoming chat events and broadcasts the payload instantly to all active sockets.
* **Static Client Serving**: Exposes a basic vanilla web client via Express static routing for quick testing.

---

## 🛠️ Technology Stack
* **Runtime Engine**: Node.js (ESModules architecture)
* **Web framework**: Express.js (v5.x)
* **Real-time Server**: Socket.io (v4.x)

---

## 🚀 Run Chat Server
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Launch the chat server:
   ```bash
   node socket.js
   ```
3. Open your web browser to `http://localhost:3000` to open the chat interface. Open multiple tabs to test real-time communication!

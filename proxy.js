const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Middleware de Proxy para WebSocket
app.use(
  "/ws",
  createProxyMiddleware({
    target: "wss://bch.games/api/graphql",
    changeOrigin: true,
    ws: true,
    secure: true,
    logLevel: "debug",
    onProxyReqWs: (proxyReq) => {
      proxyReq.removeHeader("Origin"); // Remove a origem para evitar CORS
    }
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Proxy WebSocket rodando em http://localhost:${PORT}/ws`);
});

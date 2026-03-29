const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello DevOps 2026!" }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`App running on port ${PORT}`));
``


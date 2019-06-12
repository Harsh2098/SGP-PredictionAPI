const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server started on port 3000");
    console.log("\nRoutes available:\n----------------\n/CarParkAvailabilityv2\n");
});
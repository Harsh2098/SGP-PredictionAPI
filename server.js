const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);

/*
    npm install --save express
    npm install --save-dev nodemon
    npm install --save morgan
    npm install --save body-parser
    npm install --save mongoose
    npm install --save jsonwebtoken
    
    Dd9bLAjLZD5mYBA!
    admin :: admin
*/
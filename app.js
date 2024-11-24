const http = require('http');
const routes = require('./routes');

// Pass the request handler directly to the server
const server = http.createServer(routes);

console.log(routes.someText);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

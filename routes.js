const fs = require('fs');
const { URLSearchParams } = require('url');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Enter a Message</title></head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="inbox" placeholder="Type your message here..." />
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);
            const inbox = params.get('inbox') || 'No message'; // Decoding input safely

            fs.writeFile('message.txt', inbox, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/html');
                    res.write(`
                        <html>
                            <head><title>Error</title></head>
                            <body><h1>Failed to save your message. Please try again.</h1></body>
                        </html>
                    `);
                    return res.end();
                }

                res.statusCode = 302; // Redirect to '/'
                res.setHeader('Location', '/');
                res.end();
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>My First Page</title></head>
                <body><h1>Hello from my Node.js server!</h1></body>
            </html>
        `);
        res.end();
    }
};

//module.exports = requestHandler;

//module.exports = {
//    handler: requestHandler,
//    someText: 'Hello from my Node.js server'
//};

//module.exports.handler = requestHandler;
//module.exports.someText = 'Hello from my Node';

exports.handler = requestHandler;
exports.someText = 'Hello from my Node';
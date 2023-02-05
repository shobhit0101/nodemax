const http = require('http');



const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><form action="/create-user" method = "POST"><input type="text" name="username" ><button type = "submit">send</butotn></input></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const Username = parsedBody.split('=')[1];
            console.log(Username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from this side<h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
res.write('<html');
res.write('<head><title>My App</title></head>');
res.write('<body><form method = "POST" action ="/message">');
res.write('<button type = "submit">Add Item</button>');
res.write('</form></body>');
res.write('</html');
// res.end();
return res.end();

    }
if(url === '/message' && req.method === 'POST'){
    false.writeFileSync('message.txt', 'hello text');
    res.statusCode = 302;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('<h1>Message received</h1>');
    return res.end();

}
res.write('<html>');
res.write(<head><title>My App</title></head>);
res.write('<body><h1> Hello Node Js</h1><body>');
res.write('/html>');
res.end();
});

server.listen(3000);
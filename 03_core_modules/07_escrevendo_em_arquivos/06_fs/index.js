const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if(!name) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content_Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        fs.writeFile('arquivo.txt', name, function(err, data) { //writeFile sobrescreve arquivo toda vez que é executado
            res.writeHead(302, {
                Location: "/" //enviando pra home
            })
            return res.end();
        });
    };


});

server.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
});


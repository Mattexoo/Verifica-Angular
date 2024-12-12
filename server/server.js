const http = require('http');
const url = require('url');
const fs = require('fs');

let server = http.createServer(async (req, res) => {
    let indirizzo = req.headers.host + req.url;
    let infoUrl = url.parse(indirizzo, true);

    let header = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    console.log(infoUrl.pathname);
    switch(infoUrl.pathname) {

        case '/':
          console.log("OK...");
        break;

        case '/getRegister':
            fs.readFile('registro.json', (err, file) => {
                res.writeHead(200, header);
                res.end(file);
            });
        break;

        case '/getStudents':
            fs.readFile('registro.json', (err, file) => {
                let register = JSON.parse(file);
                console.log(register);
                let param = "";

                req.on('data', (data) => {
                    param += data;
                    console.log('this is data' + data);
                });
                req.on('end', () => {
                    param=JSON.parse(param);
                    console.log(param);
                    let students = [];
                    register[param["classe"]].forEach(item => {
                        console.log(item);
                        students.push(item);
                    });
                    students=JSON.stringify(students);
                    res.writeHead(200, header);
                    res.end(students);
                });
            });
            break;
    }
});

server.listen(8888);
console.log('il server è avviato sulla porta 8888');

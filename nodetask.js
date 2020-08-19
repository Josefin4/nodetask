function readFile() {
    'use strict';
    const fs = require('fs');

    fs.readFile('package.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        console.log(student);
    });

    console.log('Reading package.json file');
}


function readOS() {
    const os = require('os');
    console.log('SYSTEM MEMORY:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
    console.log('FREE MEMORY:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
    console.log('CPU CORES:', (os.cpus().length));
    console.log('ARCH:', (os.arch()));
    console.log('PLATFORM:', (os.platform()));
    console.log('RELEASE:', (os.release()));
    console.log('USER:', (os.userInfo().username));
}


function server() {
    var http = require('http');

    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello World\n');
    }).listen(3000);

    console.log('Server started...');
    console.log('Browse to http://localhost:3000/');
}





const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose an option:\n 1. Read package.json \n 2. Display OS info \n 3. Start HTTP server \nType a number: ', function (answer) {
    if (answer === '1') {
        return readFile();
    }
    else if (answer === '2') {
        return readOS();
    }
    else if (answer === '3') {
        return server();
    }
    else {
        console.log('Invalid input');
    }

});
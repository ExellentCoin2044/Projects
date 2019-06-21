let http = require("http");
let fs = require("fs");

let Username;

let users = {
    "0": {
        "Username": "David",
        "Password": "123"
    }
}

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if(err) throw err;
        res.write(data);
        return res.end();
    });

}).listen(8000);

window.onload(() => {
    Username = document.getElementById('Login-Username');
});

console.log('the server started on http://localhost:8000');

function checkUserInput() {
    console.log(Username);
}
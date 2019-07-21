const exec = require('child_process').exec;
const mkdirp = require('mkdirp');
const push = require('git-push');
const fs = require('fs');
const parameters = process.argv;
const path = `D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}`

function createProject() {

    mkdirp(path);

    makeFile();

    //checks what the first parameter is, if it is react then init the react project if it is node do an npm init
    check();

    gitInit()
}

function makeFile() {
    fs.writeFile(`${path}/app.js`, "init", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function check() {

}

function gitInit() {
    exec(`git add -A`, (err, stdout, stderr) => {
        process.stdout.write(stdout);
    });

    exec(`git commit -m "initial commit"`, (err, stdout, stderr) => {
        process.stdout.write(stdout);
    });

    push(`D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects`, 'https://github.com/ExellentCoin2044/Projects.git');
}

createProject();
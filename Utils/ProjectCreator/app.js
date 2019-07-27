const exec = require('child_process').exec;
const mkdirp = require('mkdirp');
const push = require('git-push');
const fs = require('fs');


const parameters = process.argv;
const path = `D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}`
let isNode;


function createProject() {

    //make a dir with the specified path
    mkdirp(path);

    initProject();

    // gitInit()
}

// function check() {
//     (parameters[2] === 'Nodejs') ? isNode = true: null;
// }

function initProject() {
    //checking if the first parameter is Node. If it is, it will init
    if (parameters[2] === 'Nodejs') {
        exec(`npm init -y`, (err, stdout, stderr) => {
            process.stdout.write(stdout);
        });
    }

    if (parameters[2] === 'React') {
        exec(`cd d:/Jos/Bureaublad/Jonas/MyProjects/gitProjects/React/${parameters[3]} && npx create-react-app ${parameters[4]} -y`, (err, stdout, stderr) => {
            process.stdout.write(stdout);
        });

        return;
    }c

    fs.writeFile(`${path}/app.js`, "init", function (err) {
        if (err) {
            return console.log(err);
        }
    });
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
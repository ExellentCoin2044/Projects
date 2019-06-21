const exec = require('child_process').exec;
const mkdirp = require('mkdirp');
const parameters = process.argv;

function createProject() {
    mkdirp(`D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}`);
    //exec(`cd /d D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}`, (err, stdout, stderr) => {process.stdout.write(stdout);});
    //exec('touch app.js', (err, stdout, stderr) => {process.stdout.write(stdout);});
    exec(`git add -A`, (err, stdout, stderr) => {process.stdout.write(stdout);});
    exec(`git commit -m "initial commit"`, (err, stdout, stderr) => {process.stdout.write(stdout);});
    exec('git push', (err, stdout, stderr) => {process.stdout.write(stdout);});
}

createProject();

//console.log(parameters);
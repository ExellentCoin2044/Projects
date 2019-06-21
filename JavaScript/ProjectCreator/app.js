const exec = require('child_process').exec;
const mkdirp = require('mkdirp');
const parameters = process.argv;

function createProject() {
    mkdirp(`D:/Jos/Bureaublad/Jonas/MyProjects/GitProjects/${parameters[2]}/${parameters[3]}`);
}

createProject();

//console.log(parameters);
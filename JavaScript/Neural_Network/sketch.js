//Const variables
const path = '~/Downloads/brain.json';

//Objects
let nn;
let points = [];
let counter;
let brain = {};
let inputs;
let target;

function setup() {
    createCanvas(600, 600);
    nn = new NN(2);
    //counter = createP();

    for (let i = 0; i < 1000; i++) {
        points[i] = new Point();
    }
}

function draw() {
    background(200);
    translate(width/2, height/2);
    line()

    for (let p of points) {
        inputs = [p.x, p.y];
        target = p.target
        nn.train(inputs, target);
        p.show();

        if(isRight()){
            noStroke();
            fill(0, 255, 0);
            ellipse(p.pointX(), p.pointY(), 4, 4);
        } else {
            noStroke();
            fill(255, 0, 0);
            ellipse(p.pointX(), p.pointY(), 4, 4)
        }
    }
}

function isRight() {
    if (nn.guess(inputs) == target) {
        return true;
    } else {
        return false;
    }
}







// Saving the brain
function keyPressed() {
    // 65 is the keyCode for a
    if (keyCode === 65) {
        brain.weights = nn.weights;
        saveJSON(brain, 'brain.json');
    }
}
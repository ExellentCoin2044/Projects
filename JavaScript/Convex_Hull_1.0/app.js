let points = []; //Array of random points to preform the convex hull
let hull = []; //Aray of points that make up the hull

let left;
let lastVertex;
let currentVertex;
let checkingVertex;
let index;

const buffer = 20;
const amount = 100;

function setup() {
    createCanvas(600, 600);

    //Creating the random points
    for (let i = 0; i < amount; i++) {
        points.push(createVector(random(buffer, width - buffer), random(buffer, height - buffer)));
    }

    points.sort((a, b) => a.x - b.x);
    left = points[0];

    lastVertex = left;
    hull.push(lastVertex);
    currentVertex = points[1];
    index = 2;
}

function draw() {
    background(200);

    //Draw all the points
    fill(0);
    for (let p of points) {
        ellipse(p.x, p.y, 16);
    }

    //Left point green overlay
    fill(0, 255, 0, 80);
    ellipse(left.x, left.y, 22);

    checkingVertex = points[index];

    line(currentVertex.x, currentVertex.y, checkingVertex.x, checkingVertex.y);
    line(lastVertex.x, lastVertex.y, currentVertex.x, currentVertex.y);

    //checking if the line/angle goes to the right of the previous line
    const a = p5.Vector.sub(currentVertex, lastVertex);
    const b = p5.Vector.sub(checkingVertex, lastVertex);
    const cross = a.cross(b);

    if (cross.z < 0) {
        currentVertex = checkingVertex;
    }
    //Drawing the lines
    beginShape();
    for (let p of hull) {
        vertex(p.x, p.y);
    }
    endShape(CLOSE);

    index++;
    if (index == points.length) {
        if (currentVertex == left) {
            console.log('done');
            noLoop();
        } else {
            hull.push(currentVertex);
            lastVertex = currentVertex;
            index = 0;
          //points.splice(nextIndex, 1);
            currentVertex = left;
        }
    }
}
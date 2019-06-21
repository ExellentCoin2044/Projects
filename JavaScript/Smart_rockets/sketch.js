let population;
let dna;

let timer, populationCounter;
let time = 0,
    populationCount = 1;

function setup() {
    createCanvas(600, 600);
    population = new Population();
    dna = new Dna(population);
    population.run();
    timer = createP();
    populationCounter = createP();
}

function draw() {
    background(51);

    population.update();
    dna.update();

    //Checking if there is need for a new population
    if (population.cRockets.length == population.rocketCount || time == 400) {
        population.rockets = [];
        populationCount++;
        population.run();
        cRockets = [];
        time = 0;
    }

    timer.html("time : " + time);
    populationCounter.html("population : " + populationCount);

    time++;
}
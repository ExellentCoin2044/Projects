class Dna {
    constructor(population) {
        this.genes = [];
        this.maxforce = 0.2;
        this.population = population;
    }

    update() {
        for (let i = 0; i < this.population.rockets.length; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(this.maxforce);
            this.population.rockets[i].applyForce(this.genes[i]);
        }
    }
}
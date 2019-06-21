class Population {
    constructor(dna) {
        this.rockets = [];
        this.cRockets = [];

        this.rocketCount = 50;
    }

    run() {
        for (let i = 0; i < this.rocketCount; i++) {
            this.rockets[i] = new Rocket(this.cRockets);
        }
    }

    update() {
        for (let r of this.rockets) {
            r.update();
            r.show();
        }
    }
}
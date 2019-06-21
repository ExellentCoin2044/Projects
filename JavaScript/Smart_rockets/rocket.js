class Rocket {
    constructor(cRockets) {
        this.pos = createVector(width / 2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.maxVel = 4;
        this.crashed = false;
        this.cRockets = cRockets;
    }

    checkCrash() {
        if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height && !this.crashed){
            this.crashed = true;
            this.cRockets.push(this);
        }
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        if (!this.crashed) {
            this.checkCrash();
            this.vel.add(this.acc);
            this.vel.limit(this.maxVel);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    show() {
        push();
        noStroke();
        fill(255, 150);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading())
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    }
}
class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    move(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    update() {
        if (time == 6) {
            this.x += this.xSpeed * gridW;
            this.y += this.ySpeed * gridW;
            this.x = constrain(this.x, 0, width - gridW);
            this.y = constrain(this.y, 0, height - gridW);
            time = 0;
        }
    }

    show() {
        square(this.x, this.y, gridW);
    }
}
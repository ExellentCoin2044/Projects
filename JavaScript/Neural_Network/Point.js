function f(x) {
    return 3 * x - 5;
}

class Point {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.target = this.target();
    }

    show() {
        noStroke();
        fill(0);
        ellipse(this.pointX(), this.pointY(), 8, 8);
    }

    target() {
        if (this.y < f(this.x)) {
            return 0;
        } else {
            return 1;
        }
    }

    pointX() {
        return map(this.x, 0, width, -width/2, width/2);
    }

    pointY() {
        return map(this.y, 0, height, -height/2, height/2);
    }

}
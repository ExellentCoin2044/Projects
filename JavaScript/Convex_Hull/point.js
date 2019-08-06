class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        fill(0)
        ellipse(this.x, this.y, 8);
    }
}
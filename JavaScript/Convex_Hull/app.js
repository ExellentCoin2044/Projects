let points = [];

const amount = 70;

let mostLeft;
let mostRight;
let mostTop;
let mostDown;

function setup() {
    createCanvas(600, 600);
    //background(200);

    //Create all the points and add them to an array
    for (let i = 0; i < amount; i++) {
        points.push(new Point(random(width), random(height)));
    }



    //Convex Hull Algorythm
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            //Calculate most left and most right
            if (points[i].x < points[j].x) {
                if (mostLeft != null && points[i].x < mostLeft.x) {
                    mostLeft = points[i];
                } else if (mostRight != null && points[j].x > mostRight.x) {
                    mostRight = points[j];
                }
            } else if (mostLeft == null || mostRight == null) {
                mostLeft = points[i];
                mostRight = points[j];
            }

            //Calculate most top and most down
            if (points[i].y < points[j].y) {
                if (mostTop != null && points[i].y < mostTop.y) {
                    mostTop = points[i];
                } else if (mostDown != null && points[j].y > mostDown.y) {
                    mostDown = points[j];
                }
            } else if (mostTop == null || mostDown == null) {
                mostTop = points[i];
                mostDown = points[j];
            }
        }
    }

    //kill the corners
    for (let i = points.length - 1; i >= 0; i--) {
        if (points[i] === mostRight || points[i] === mostLeft || points[i] === mostTop || points[i] === mostDown) {
            points.splice(i, 1);
        }
    }

    //Polygon
    let polygon = [
        [mostLeft.x, mostLeft.y],
        [mostTop.x, mostTop.y],
        [mostRight.x, mostRight.y],
        [mostDown.x, mostDown.y]
    ];

    //Kill the points in the shape
    for (let i = points.length - 1; i >= 0; i--) {
        let inside = checkInside(points[i].x, points[i].y, polygon);
        if (inside == true) {
            points.splice(i, 1);
        }
    }
}

function draw() {
    background(200)
    //Draw all the points
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }

    //Draw a shape between the points
    stroke(0);
    strokeWeight(4);
    noFill();
    beginShape();
    vertex(mostLeft.x, mostLeft.y);
    vertex(mostTop.x, mostTop.y);
    vertex(mostRight.x, mostRight.y);
    vertex(mostDown.x, mostDown.y);
    endShape(CLOSE);
}



function checkInside(x_, y_, polygon) {
    var x = x_,
        y = y_;

    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i][0],
            yi = polygon[i][1];
        var xj = polygon[j][0],
            yj = polygon[j][1];

        var intersect = ((yi > y) != (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
}
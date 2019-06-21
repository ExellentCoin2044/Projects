int scale = 100; //<>//
float angle = 0;

P4Vector[] points;

void setup() {
  size(600, 600, P3D);
  points = new P4Vector[16];
  points[0] = new P4Vector(-1, -1, -1, 1);
  points[1] = new P4Vector(1, -1, -1, 1);
  points[2] = new P4Vector(1, 1, -1, 1);
  points[3] = new P4Vector(-1, 1, -1, 1);
  points[4] = new P4Vector(-1, -1, 1, 1);
  points[5] = new P4Vector(1, -1, 1, 1);
  points[6] = new P4Vector(1, 1, 1, 1);
  points[7] = new P4Vector(-1, 1, 1, 1);
  points[8] = new P4Vector(-1, -1, -1, -1);
  points[9] = new P4Vector(1, -1, -1, -1);
  points[10] = new P4Vector(1, 1, -1, -1);
  points[11] = new P4Vector(-1, 1, -1, -1);
  points[12] = new P4Vector(-1, -1, 1, -1);
  points[13] = new P4Vector(1, -1, 1, -1);
  points[14] = new P4Vector(1, 1, 1, -1);
  points[15] = new P4Vector(-1, 1, 1, -1);
}


void draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(10);
  rotateX(-PI/2);

  //Looping over every point and calculating its rotation
  PVector[] projected3D = new PVector[16];
  for (int i = 0; i < points.length; i++) {
    P4Vector v = points[i];

    //rotation matrices
    float[][] rotateZW = {
      {1, 0, 0, 0}, 
      {0, 1, 0, 0}, 
      {0, 0, cos(angle), -sin(angle)}, 
      {0, 0, sin(angle), cos(angle)}
    };

    float[][] rotateXY = {
      {cos(angle), -sin(angle), 0, 0}, 
      {sin(angle), cos(angle), 0, 0}, 
      {0, 0, 1, 0}, 
      {0, 0, 0, 1}
    };

    //rotation
    P4Vector rotated = matMult(rotateXY, v, true);
    rotated = matMult(rotateZW, rotated, true);

    //Calculating the projection
    float distance = 2;
    float w = 1 / (distance - rotated.w);

    float[][] projection = {
      {w, 0, 0, 0}, 
      {0, w, 0, 0}, 
      {0, 0, w, 0}
    };

    PVector projected = matMult(projection, rotated);
    projected.mult(scale);

    //Drawing the points
    projected3D[i] = projected;
    point(projected.x, projected.y, projected.z);
  }
  angle += 0.03;

  //Connecting all the points

  for (int i = 0; i < 4; i++) {
    connect(0, i, (i+1) % 4, projected3D);
    connect(0, i+4, ((i+1) % 4)+4, projected3D);
    connect(0, i, i+4, projected3D);
  }

  for (int i = 0; i < 4; i++) {
    connect(8, i, (i+1) % 4, projected3D );
    connect(8, i+4, ((i+1) % 4)+4, projected3D);
    connect(8, i, i+4, projected3D);
  }

  for (int i = 0; i < 8; i++) {
    connect(0, i, i + 8, projected3D);
  }
}

void connect(int offset, int i, int j, PVector[] points) {
  PVector a = points[i+offset];
  PVector b = points[j+offset];
  strokeWeight(4);
  stroke(255);
  line(a.x, a.y, a.z, b.x, b.y, b.z);
}

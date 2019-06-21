float[][] projection = { //<>//
  {1, 0, 0}, 
  {0, 1, 0}
};

PVector[] points;

int scale = 100;

void setup() {
  size(600, 600);
  //frameRate(60);
  points = new PVector[8];
  points[0] = new PVector(-1, 1, 1);
  points[1] = new PVector(-1, -1, 1);
  points[2] = new PVector(1, 1, 1);
  points[3] = new PVector(1, -1, 1);
  points[4] = new PVector(-1, 1, -1);
  points[5] = new PVector(-1, -1, -1);
  points[6] = new PVector(1, 1, -1);
  points[7] = new PVector(1, -1, -1);


  for (PVector p : points) {
    p.mult(scale);
  }
}

float a = 0;
void draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(10);

  float[][] rotateZ = {
    {cos(a), -sin(a), 0}, 
    {sin(a), cos(a), 0}, 
    {0, 0, 1}
  };

  float[][] rotateX = {
    {1, 0, 0}, 
    {0, cos(a), -sin(a)}, 
    {0, sin(a), cos(a)}
  };

  float[][] rotateY = {
    {cos(a), 0, -sin(a)}, 
    {0, 1, 0}, 
    {sin(a), 0, cos(a)}
  };

  PVector[] rPoints = new PVector[8];
  int index = 0;
  for (PVector p : points) {
    PVector rotated = matMult(rotateY, p);
    rotated = matMult(rotateZ, rotated);
    rotated = matMult(rotateX, rotated);
    point(rotated.x, rotated.y);
    rPoints[index] = rotated;
    index++;
  }
  a += 0.02;

  connect(0, 1, rPoints);
  connect(1, 3, rPoints);
  connect(2, 0, rPoints);
  connect(3, 2, rPoints);
  
  connect(4, 5, rPoints);
  connect(5, 7, rPoints);
  connect(6, 4, rPoints);
  connect(7, 6, rPoints);
  
  connect(0, 4, rPoints);
  connect(1, 5, rPoints);
  connect(2, 6, rPoints);
  connect(3, 7, rPoints);

}

void connect(int i, int j, PVector[] p) {
  stroke(255);
  strokeWeight(2);
  line(p[i].x, p[i].y, p[j].x, p[j].y);
}

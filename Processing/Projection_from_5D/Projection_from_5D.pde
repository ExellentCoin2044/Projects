int scale = 200;
float angle = 0;

P5Vector[] points;

void setup() {
  size(1900, 1000, P3D);
  points = new P5Vector[32];
  points[0] = new P5Vector(-1, -1, -1, 1, 1);
  points[1] = new P5Vector(1, -1, -1, 1, 1);
  points[2] = new P5Vector(1, 1, -1, 1, 1);
  points[3] = new P5Vector(-1, 1, -1, 1, 1);
  points[4] = new P5Vector(-1, -1, 1, 1, 1);
  points[5] = new P5Vector(1, -1, 1, 1, 1);
  points[6] = new P5Vector(1, 1, 1, 1, 1);
  points[7] = new P5Vector(-1, 1, 1, 1, 1);
  points[8] = new P5Vector(-1, -1, -1, -1, 1);
  points[9] = new P5Vector(1, -1, -1, -1, 1);
  points[10] = new P5Vector(1, 1, -1, -1, 1);
  points[11] = new P5Vector(-1, 1, -1, -1, 1);
  points[12] = new P5Vector(-1, -1, 1, -1, 1);
  points[13] = new P5Vector(1, -1, 1, -1, 1);
  points[14] = new P5Vector(1, 1, 1, -1, 1);
  points[15] = new P5Vector(-1, 1, 1, -1, 1);
  points[16] = new P5Vector(-1, -1, -1, 1, -1);
  points[17] = new P5Vector(1, -1, -1, 1, -1);
  points[18] = new P5Vector(1, 1, -1, 1, -1);
  points[19] = new P5Vector(-1, 1, -1, 1, -1);
  points[20] = new P5Vector(-1, -1, 1, 1, -1);
  points[21] = new P5Vector(1, -1, 1, 1, -1);
  points[22] = new P5Vector(1, 1, 1, 1, -1);
  points[23] = new P5Vector(-1, 1, 1, 1, -1);
  points[24] = new P5Vector(-1, -1, -1, -1, -1);
  points[25] = new P5Vector(1, -1, -1, -1, -1);
  points[26] = new P5Vector(1, 1, -1, -1, -1);
  points[27] = new P5Vector(-1, 1, -1, -1, -1);
  points[28] = new P5Vector(-1, -1, 1, -1, -1);
  points[29] = new P5Vector(1, -1, 1, -1, -1);
  points[30] = new P5Vector(1, 1, 1, -1, -1);
  points[31] = new P5Vector(-1, 1, 1, -1, -1);
}


void draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(10);
  rotateX(-PI/9);
  rotateY(-PI/3);
  //rotateZ(-PI/2);

  PVector[] projected3Dl = new PVector[32];
  for (int i = 0; i < points.length; i++) {
    P5Vector v = points[i];





    //rotation matrix
    float[][] rotateXYZ = {
      {1, 0, 0, 0, 0},
      {0, 1, 0, 0, 0},
      {0, 0, 1, 0, 0},
      {0, 0, 0, cos(angle), -sin(angle)},
      {0, 0, 0, sin(angle), cos(angle)}
    };
    
    float[][] rotateVXY = {
      {1, 0, 0, 0, 0}, 
      {0, 1, 0, 0, 0}, 
      {0, 0, cos(angle), -sin(angle), 0}, 
      {0, 0, sin(angle), cos(angle), 0}, 
      {0, 0, 0, 0, 1}
    };

    float[][] rotateWVX = {
      {1, 0, 0, 0, 0}, 
      {0, cos(angle), -sin(angle), 0, 0}, 
      {0, sin(angle), cos(angle), 0, 0}, 
      {0, 0, 0, 1, 0}, 
      {0, 0, 0, 0, 1}
    };
    
    float[][] rotateZWV = {
      {cos(angle), sin(angle), 0, 0, 0},
      {sin(angle), cos(angle), 0, 0, 0},
      {0, 0, 1, 0, 0},
      {0, 0, 0, 1, 0},
      {0, 0, 0, 0, 1}
    };

    float[][] rotateC = {
      {1, 0, 0, 0, 0}, 
      {0, 1, 0, 0, 0}, 
      {0, 0, 1, 0, 0}, 
      {0, 0, 0, cos(angle), -sin(angle)},
      {0, 0, 0, sin(angle), cos(angle)}
    };




    //rotation
    P5Vector rotated = matMult(rotateXYZ, v, true, true);
    rotated = matMult(rotateZWV, rotated, true, true);
    rotated = matMult(rotateC, rotated, true, true);
    rotated = matMult(rotateWVX, rotated, true, true);


    //Calculating the projection
    float distance = 2;
    float w = 1 / (distance - rotated.w);

    float[][] projection4D = {
      {w, 0, 0, 0, 0}, 
      {0, w, 0, 0, 0}, 
      {0, 0, w, 0, 0}, 
      {0, 0, 0, w, 0}
    };

    float[][] projection3D = {
      {w, 0, 0, 0}, 
      {0, w, 0, 0}, 
      {0, 0, w, 0}
    };

    P4Vector projected4D = matMult(projection4D, rotated, true);
    PVector projected3D = matMult(projection3D, projected4D);
    projected3D.mult(scale);

    //Drawing the points
    projected3Dl[i] = projected3D;
    point(projected3D.x, projected3D.y, projected3D.z);
  }
  angle += 0.01;

  connect(0, 0, 1, projected3Dl);
  connect(0, 1, 2, projected3Dl);
  connect(0, 2, 3, projected3Dl);
  connect(0, 3, 0, projected3Dl);

  connect(4, 0, 1, projected3Dl);
  connect(4, 1, 2, projected3Dl);
  connect(4, 2, 3, projected3Dl);
  connect(4, 3, 0, projected3Dl);

  connect(8, 0, 1, projected3Dl);
  connect(8, 1, 2, projected3Dl);
  connect(8, 2, 3, projected3Dl);
  connect(8, 3, 0, projected3Dl);

  connect(12, 0, 1, projected3Dl);
  connect(12, 1, 2, projected3Dl);
  connect(12, 2, 3, projected3Dl);
  connect(12, 3, 0, projected3Dl);

  connect(0, 0, 4, projected3Dl);
  connect(1, 0, 4, projected3Dl);
  connect(2, 0, 4, projected3Dl);
  connect(3, 0, 4, projected3Dl);

  connect(8, 0, 4, projected3Dl);
  connect(9, 0, 4, projected3Dl);
  connect(10, 0, 4, projected3Dl);
  connect(11, 0, 4, projected3Dl);

  connect(0, 0, 8, projected3Dl);
  connect(1, 0, 8, projected3Dl);
  connect(2, 0, 8, projected3Dl);
  connect(3, 0, 8, projected3Dl);

  connect(4, 0, 8, projected3Dl);
  connect(5, 0, 8, projected3Dl);
  connect(6, 0, 8, projected3Dl);
  connect(7, 0, 8, projected3Dl);






  //Connecting all the points

  //  for (int i = 0; i < 4; i++) {
  //    connect(0, i, (i+1) % 4, projected3Dl);
  //    connect(0, i+4, ((i+1) % 4)+4, projected3Dl);
  //    connect(0, i, i+4, projected3Dl);
  //  }

  //  for (int i = 0; i < 4; i++) {
  //    connect(8, i, (i+1) % 4, projected3Dl);
  //    connect(8, i+4, ((i+1) % 4)+4, projected3Dl);
  //    connect(8, i, i+4, projected3Dl);
  //  }

  //  for (int i = 0; i < 8; i++) {
  //    connect(0, i, i + 8, projected3Dl);
  //  }
}

void connect(int offset, int i, int j, PVector[] points) {
  PVector a = points[i+offset];
  PVector b = points[j+offset];
  strokeWeight(1);
  stroke(255);
  line(a.x, a.y, a.z, b.x, b.y, b.z);
}

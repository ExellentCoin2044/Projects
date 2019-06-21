//Conversion between matrix and vector //<>//
float[][] vecToMatrix(PVector v){
  float[][] m = new float[3][1];
  m[0][0] = v.x;
  m[1][0] = v.y;
  m[2][0] = v.z;
  return m;
}

PVector matrixToVec(float[][] m) {
  PVector v = new PVector();
  v.x = m[0][0];
  v.y = m[1][0];
  if (m.length > 2)
    v.z = m[2][0];
  return v;
}

//Loging of a matrix
void logMatrix(float[][] m) {
  int rows = m.length;
  int cols = m[0].length;
  println (rows + "x" + cols);
  println("-----------------");
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      print(m[i][j] + " ");
    }
    println();
  }
  println();
}

//Multiplication
PVector matMult(float[][] a, PVector v){
  float[][] m = vecToMatrix(v);
  return matMult(a, m);
}

PVector matMult(float[][] a, float[][] b) {
  int rowsA = a.length;
  int colsA = a[0].length;
  int rowsB = b.length;
  int colsB = b[0].length;

  if (colsA != rowsB){
    println("columns of A must match rows of B");
    return null;
  }

  float[][] result = new float[rowsA][colsB];
  for (int i = 0; i < rowsA; i++) {
    for (int j = 0; j < colsB; j++) {
      float sum = 0;
      for (int k = 0; k < rowsB; k++) {
        sum += a[i][k] * b[k][j];
        result[i][j] = sum;
      }
    }
  }
  return matrixToVec(result);
}

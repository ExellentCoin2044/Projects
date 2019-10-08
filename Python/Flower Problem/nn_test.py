import numpy as np

def sigmoid(x):
    f = 1/(1+np.exp(-x))
    return f

nn_values = open('NN.txt', 'r').readlines()

flower = [4.5, 1]

w1 = float(nn_values[0].strip('\n'))
w2 = float(nn_values[1].strip('\n'))
b  = float(nn_values[2].strip('\n'))

z = w1 * flower[0] + w2 * flower[1] + b
print(sigmoid(z))
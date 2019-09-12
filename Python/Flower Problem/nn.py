import numpy as np

#Training data
flowers = [[3  , 1.5, 1],
           [2  , 1  , 0],
           [4  , 1.5, 1],
           [3  , 1  , 0],
           [3.5, .5 , 1],
           [2  , .5 , 0],
           [5.5, 1  , 1],
           [1  , 1  , 0]]

#Sigmoid function
def sigmoid(x):
    f = 1/(1+np.exp(-x))
    return f

#Neural network function
def neural_network():
    #Parameter initialization
    w1 = np.random.randn()
    w2 = np.random.randn()
    b = np.random.randn()
    learning_rate = 0.2 #The speed at wich the NN learns

    for i in range(10000):
        
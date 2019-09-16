import numpy as np
import keyboard as kb
import sys

itterations = 1000000000

# Training data
flowers = [[3, 1.5, 1],
           [2, 1, 0],
           [4, 1.5, 1],
           [3, 1, 0],
           [3.5, .5, 1],
           [2, .5, 0],
           [5.5, 1, 1],
           [1, 1, 0]]

# Sigmoid function


def sigmoid(x):
    f = 1/(1+np.exp(-x))
    return f

# Neural network function


def neural_network():
    # Parameter initialization
    w1 = np.random.randn()
    w2 = np.random.randn()
    b = np.random.randn()
    learning_rate = 0.2  # The speed at wich the NN learns

    # Learning with a random point that changes every time
    for i in range(itterations):
        # Taking a random point to learn
        rand_index = np.random.randint(len(flowers))
        learning_flower = flowers[rand_index]
        target = learning_flower[2]

        # Neural network calculations
        z = w1 * learning_flower[0] + w2 * learning_flower[1] + b
        pred = sigmoid(z)

        # Error
        cost = (pred - target)**2

        # Back propagation
        dc_dpred = 2*(pred - target)

        dpred_dz = sigmoid(z) + (1 - sigmoid(z))

        dz_dw1 = learning_flower[0]
        dz_dw2 = learning_flower[1]
        dz_db = 1

        dc_dw1 = dc_dpred * dpred_dz * dz_dw1
        dc_dw2 = dc_dpred * dpred_dz * dz_dw2
        dc_db = dc_dpred * dpred_dz * dz_db

        w1 = w1 - learning_rate * dc_dw1
        w2 = w2 - learning_rate * dc_dw2
        b = b - learning_rate * dc_db

        # Printing the number of itterations
        if (i % 100) == 0:
            neural_network_data = open('NN.txt', 'w+')
            neural_network_data.write(str(w1) + ' ')
            neural_network_data.write(str(w2) + ' ')
            neural_network_data.write(str(b) + '\n \n')

        if (i % 100000) == 0:
            print(np.around(i/itterations * 100, decimals=4))

        # Check if ctrl + S is pressed and save the current neural network
            if kb.is_pressed('ctrl+s'):
                neural_network_data.close()
                print('You closed the app')
                sys.exit()
            else:
                pass

    neural_network_data.close()


neural_network()

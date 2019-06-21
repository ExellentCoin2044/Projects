function sigmoid(z) {
    return 1 / (1 + exp(-z));
}

class NN {
    constructor(connections) {
        this.lr = 0.01;
        this.weights = [];
        for (let i = 0; i < connections; i++) {
            this.weights[i] = random(-10000, 10000);
        }
    }

    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return sigmoid(sum);
    }

    train(inputs, target) {
        for (let j = 0; j < inputs.length; j++) {
            let guess = this.guess(inputs);
            //counter.html(guess.toFixed(6));
            let error = target - guess;
            for (let i = 0; i < this.weights.length; i++) {
                this.weights[i] += error * inputs[i] * this.lr;
            }
        }
    }
}
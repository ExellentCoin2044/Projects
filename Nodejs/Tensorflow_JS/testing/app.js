function createModel() {
    //Create the model
    const model = tf.sequential({
        layers: [
            tf.layers.dense({
                inputShape: [3],
                units: 10,
            }),
            tf.layers.dense({
                units: 10,
            }),
            tf.layers.dense({
                units: 2,
                activation: 'sigmoid'
            })
        ]
    });

    //Compile the model
    model.compile({
        optimizer: 'adam',
        loss: 'meanSquaredError',
        metrics: ['precision', 'accuracy']
    });
    return model;
}

function generateData() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    const blackOrWhite = Math.round(Math.random())

    // const data = tf.tensor2d([r, g, b], [1, 100]);
    // const label = tf.scalar(blackOrWhite)

    const data = tf.randomUniform([100, 3], 0, 255, 'int32');
    const labels = tf.randomUniform([100, 2]);

    return {
        data,
        labels
    };
}

function trainModel(model) {

    const {
        data,
        labels
    } = generateData();


    function onBatchEnd(batch, logs) {
        console.log('Accuracy: ', logs.acc);
    }

    model.fit(data, labels, {
        epochs: 50,
        batchSize: 32,
        callbacks: {
            onBatchEnd
        }
    }).then(info => console.log('Final Accuracy: ', info.history.acc));
}

function run() {
    tf.tidy(() => {
        const model = createModel();
        trainModel(model);
    });
}

run();
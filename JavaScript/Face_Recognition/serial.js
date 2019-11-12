const SerialPort = require('serialport')
let port

Promise.then(getPorts).catch(err => console.error(err))

async function getPorts() {
    
        let path_to_port = await SerialPort.list().path
        port = new SerialPort(String(path_to_port), {
            baudRate: 9600
        })
        console.error(err)



    port.write('Hello Other Computer')
}
//const port = new SerialPort(null, { baudrate: 9600 });

//port.write('Hello other computer!');
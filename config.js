const convict = require("convict");

const config = convict({
    apiUrl:{
        doc: 'The url application \"api\".',
        format: String,
        default: 'http://localhost:3000/',
        env: 'NODE_URL'
    },
    port: {
        doc: 'The port to bind.', // опис призначення
        format: 'port',           // формат поля String, ipadress, port, array, url, int, timestamp, *
        default: 3001,
        env: 'PORT',                   // назва змінної у файлі .env
        arg: 'port'
    }
});

config.validate({ allowed: 'strict' }); // виконувати перевірку параметрів

module.exports = config;

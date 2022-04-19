const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Miguel');
});


app.listen(8082, () => {
    let data = new Date();
    console.log('Servidor node iniciando em: ' + data);
});
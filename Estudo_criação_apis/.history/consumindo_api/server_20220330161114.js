const cors = require('cors')
const express = require('express')
const app = express()

app.use

app.get('/', (req, res) => {
    return res.json([
        { name: 'Maicol' },
        { name: 'Miguel' }
    ])
})

app.listen('4867')
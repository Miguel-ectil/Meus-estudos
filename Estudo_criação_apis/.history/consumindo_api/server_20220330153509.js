
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json([
        { name: 'Maicol' }
        {}
    ])
})

app.listen('4867')
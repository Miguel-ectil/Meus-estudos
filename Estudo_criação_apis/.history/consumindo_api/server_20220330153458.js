
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json([
         { name: 'M' }
    ])
})

app.listen('4867')
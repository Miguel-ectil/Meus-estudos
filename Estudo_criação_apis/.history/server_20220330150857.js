
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json({ messa})
})

app.listen('4867')
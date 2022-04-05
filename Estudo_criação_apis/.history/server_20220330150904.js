
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'Eae bl'})
})

app.listen('4867')
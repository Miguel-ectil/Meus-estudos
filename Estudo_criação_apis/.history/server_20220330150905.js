
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'Eae blz'})
})

app.listen('4867')
const express = require("express");
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req,res) => {
    res.send("hello from users Umayer")
})

app.get('/about', (req,res) => {
    res.send("Umayer Walking Now")
})

app.get('/product', (req,res) => {
    res.send("Products are Now")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
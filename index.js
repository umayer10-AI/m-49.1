const express = require("express");
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req,res) => {
    res.send("hello from users Umayer")
})

const users = [
    {id: 1, name: 'Jhon doe', email: "jhondoe50@gmail.com"},
    {id: 2, name: 'Jhon doe', email: "jhondoe50@gmail.com"},
    {id: 3, name: 'Jhon doe', email: "jhondoe50@gmail.com"},
]

app.get('/about', (req,res) => {
    res.send(users)
})

app.get('/product', (req,res) => {
    res.send("Products are Now")
})

app.post('/about', (res,req) => {
    console.log("post Korsi")
    res.send("Post Method is working")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
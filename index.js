const express = require("express");
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

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

app.post('/about', (req,res) => {
    console.log("post Korsi" ,req.body)

    const newUser = req.body
    newUser.id = users.length+1
    users.push(newUser)

    res.send({success: true, data: newUser, message: 'Post Method is working'})
})

app.get('/product', (req,res) => {
    res.send("Products are Now")
})



app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
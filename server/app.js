const express = require("express")
const mongoose = require('mongoose')
const app = express()


app.get("/api", (req,res,next) => {
    res.send({"a": "hello"})
})

mongoose.connect('mongodb://mongo:27017/docker-db').then(() => {
    app.listen(5000, () => {
        console.log("Server Started at port 5000!")
    })
}).catch((err) => {
    console.log(err)
})
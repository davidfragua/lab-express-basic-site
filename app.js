const express = require('express')
const { resolve } = require('path')
const app = express()
const port = 3000

app.use( express.static("public") )


app.get("/home", (req, res) =>{
    res.sendFile(__dirname + "/views/home.html" )
})

app.get("/about", (req , res) =>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html" )
})

app.get("*", (req, res) =>{
    res.send("No te inventes rutas!!!")
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
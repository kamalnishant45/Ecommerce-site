const express = require('express')
const app = express()
const HTTP_PORT = 8080;
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/shop',(req,res)=>{
    res.sendFile(path.join(__dirname,'shop.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})

app.listen(HTTP_PORT,()=>{
    console.log('server is listening on port ' + HTTP_PORT)
})
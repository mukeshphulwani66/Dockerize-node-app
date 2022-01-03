import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>docker is awesome 3</h1>")
})
app.get('/about',(req,res)=>{
    res.send(process.env.API_KEY)
})

app.listen(5000,()=>{
    console.log("server running on 5000!")
})
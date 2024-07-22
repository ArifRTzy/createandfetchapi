const express = require("express")
const app = express()
const port = 8000
const tshirts = []

app.use(express.json())

app.listen(
    port,
    ()=> console.log(`It is alive on http://localhost:${port}`)
)

app.get("/tshirt",(req,res)=>{
    res.json(tshirts)
})

app.post("/tshirt", (req,res)=>{
    const {id, color, size} = req.body
    if(!id || !color || !size){
        return res.status(400).send("All fields(id, color, size) are required!")
    }
    const tshirt = {id, color, size}
    tshirts.push(tshirt)
    res.status(201).json(tshirt)
})
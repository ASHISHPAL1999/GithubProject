const express =require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send(`welcome alien!`)

})
app.listen(2000,(req,res)=>{
    console.log("port running at 2000")
})
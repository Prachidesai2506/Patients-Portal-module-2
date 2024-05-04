const express=require("express")
const collection2=require("./mongo")
// const collection2=require("./mango")
const cors=require("cors")
const { connect } = require("mongoose")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "*"
}))
// connect("mongodb://localhost:27017")
app.get("/",cors(),(req,res)=>{

})

app.listen(3000,()=>{
    console.log("port is running");
})
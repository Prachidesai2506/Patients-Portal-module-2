const express=require("express")
const collections=require("./mongo")
const collection2=require("./mongo2")
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
app.post("/",async(req,res)=>{
   console.log("/")
    try{
     const check=await collections.findOne({email:req.body.email})
     if(check)
     {
        res.json("exist")
     }
     else{
        res.json("not exist")
     }
    }
    catch(e){
        res.json("not exist")
console.log(e)
    }
})

app.post("/signup",async(req,res)=>{
    
    console.log(req)
    const data={
        email:req.body.email,
        password:req.body.password,
    }
    try{
     const check=await collections.findOne({email:data.email})
     if(check)
     {
        res.json("already exist")
     }
     else{
        res.json("not exist")
        await collections.insertMany(data)
        console.log("the data is stored")
     }
    }
    catch(e){
        res.json("not exist")
console.log(e)
    }
})

app.post("/doclogin",async(req,res)=>{
    console.log("/")
     try{
      const check=await collection2.findOne({email:req.body.email})
      if(check)
      {
         res.json("exist")
      }
      else{
         res.json("not exist")
      }
     }
     catch(e){
         res.json("not exist")
 console.log(e)
     }
 })
 
 app.post("/docsignup",async(req,res)=>{
     console.log(req)
     const data={
         email:req.body.email,
         password:req.body.password,
     }
     try{
      const check=await collection2.findOne({email:data.email})
      if(check)
      {
         res.json("already exist")
      }
      else{
         res.json("not exist")
         await collection2.insertMany(data)
         console.log("the data is stored")
      }
     }
     catch(e){
         res.json("not exist")
 console.log(e)
     }
 })

 
app.listen(3000,()=>{
    console.log("port is running");
})
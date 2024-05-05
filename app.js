const express=require("express")
const collections=require("./mongo")
const collection2=require("./mongo2")
const collection=require("./mongo3")
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
        id_no:req.body.id_no,
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
 app.post("/appointment", async (req, res) => {
    try {
        const data = {
            id_no: req.body.id_no,
            name: req.body.name,
            date: req.body.date,
            time: req.body.time
        };

        const existingDoc = await collection.findOne({ id_no: data.id_no });

        if (existingDoc) {
            res.json("already exist");
            
        } else {
            res.json("does not already exist");
            await collection.insertMany(data);
            console.log("Data stored in the database.");
        }
    } catch (error) {
        console.error("Error storing data in the database:", error);
        // res.status(500).json("Error storing data in the database");
    }
});

app.get('/getappointments',(req,res)=>
{
    collection.find()
    .then(cappointments => res.json(cappointments))
    .catch(err => res.json(err))
})
 
app.listen(3000,()=>{
    console.log("port is running");
})
const express=require("express")
const collections=require("./mongo")
const collection2=require("./mongo2")
const collection=require("./mongo3")
const pdcollection=require("./mongo4")
const ddcollection=require("./mongo5")
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

//CHECK THE DATA OF PATIENT AND GET LOGGED IN

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

// PATIENTS GET REGISTERED

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

// GET LOGGED IN FOR DOCTORS

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
 
//DOCTORS GETTING SIGNED UP (REGISTERED)

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

// STORE APPOINTMENT DATA

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

// GET APPOINTMENT DATA

app.get('/getappointments',(req,res)=>
{
    collection.find()
    .then(cappointments => res.json(cappointments))
    .catch(err => res.json(err))
})
 
//STORE PATIENTS DETAILS IN DATABASE

app.post("/profile_data", async (req, res) => {
    try {
        const data = {
            // id_no: req.body.id_no,
            fname: req.body.fname,
            lname: req.body.lname,
            Age: req.body.Age,
            Gender: req.body.Gender
        };
        await pdcollection.insertMany(data);
        console.log("Data stored in the database.");
        
    } catch (error) {
        console.error("Error storing data in the database:", error);
        // res.status(500).json("Error storing data in the database");
    }
});

// STORE DOCTOR DATA IN DATABASE
app.post("/doctor_profile", async (req, res) => {
    try {
        const data = {
            // id_no: req.body.id_no,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            degree: req.body.degree,
            speciality:req.body.speciality,
            college: req.body.college,
            year: req.body.year
        };
        await ddcollection.insertMany(data);
        console.log("Data stored in the database.");
        
    } catch (error) {
        console.error("Error storing data in the database:", error);
        // res.status(500).json("Error storing data in the database");
    }
});

//Get doctors data
app.get('/getdocdata',(req,res)=>
    {
        ddcollection.find()
        .then(doctordatas => res.json(doctordatas))
        .catch(err => res.json(err))
    })
app.listen(3000,()=>{
    console.log("port is running");
})
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/patientdata")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log('failed');
})
const newSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    } 

})

console.log("the schema is created")
// const collection = mongoose.model('collection',newSchema);
const ddcollection = mongoose.model('doctordata',newSchema);
if(ddcollection)
{
    console.log("exported")
}
else
{
    console.log(" not exported")
}
// module.exports=collection
module.exports=ddcollection
console.log("the schema is exported")
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/patientdata")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log('failed');
})
const newSchema=new mongoose.Schema({
    id_no:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }  
})

console.log("the schema is created")
// const collection = mongoose.model('collection',newSchema);
const ccollection = mongoose.model('cappointment',newSchema);
if(ccollection)
{
    console.log("exported")
}
else
{
    console.log(" not exported")
}
// module.exports=collection
module.exports=ccollection
console.log("the schema is exported")
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/patientdata")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log('failed');
})
const newSchema=new mongoose.Schema({
    // id_no:{
    //     type:String,
    //     required:true
    // },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    // files:{
    //     type:
    // }
    
})

console.log("the schema is created")
// const collection = mongoose.model('collection',newSchema);
const pdcollection = mongoose.model('patientdata',newSchema);

if(pdcollection)
{
    console.log("exported")
}
else
{
    console.log(" not exported")
}
// module.exports=collection
module.exports=pdcollection
console.log("the schema is exported")
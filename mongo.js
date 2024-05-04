const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/patientdata")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log('failed');
})
const newSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

console.log("the schema is created")
const collection = mongoose.model('collection',newSchema);
// const collection2 = mongoose.model('collection2',newSchema);
if(collection)
{
    console.log("exported")
}
else
{
    console.log(" not exported")
}
// if(collection2)
// {
//     console.log("exported")
// }
// else
// {
//     console.log(" not exported")
// }
module.exports=collection
// module.exports=collection2
console.log("the schema is exported")
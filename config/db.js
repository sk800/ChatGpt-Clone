const mongoose=require('mongoose')


const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log('conected');
    }
    catch(error){
        console.log(`the error is ${error}`)
    }
}

module.exports=connectDB;
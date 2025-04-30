const mongoose  =require('mongoose')
async function dbconn(){
    const conn=await mongoose.connect('mongodb+srv://Pooja:root@cluster0.aetkfm1.mongodb.net/student-ce?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('database connect successfully')
    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbconn;
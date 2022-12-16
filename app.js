const express=require('express');
const connectDB=require('./connection/db');
const router=require('./routes/route');
const notFound=require('./middlewares/notfound');
const errorHandler=require('./middlewares/Error-handler');

require('dotenv').config();

const app=express();

//Middlewares:
app.use(express.json());
app.use('/api/v1',router);
app.use(express.static('./public'));
app.use(notFound);
app.use(errorHandler);

const start=async()=>{
   try{
      await connectDB(process.env.MONGO_URI);
      app.listen(5000,()=>{
         console.log('Connected to port 5000...');
      })
   }
   catch(err){
      console.log(err.message);
   }
}

start();
import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routers/user-routes';
import blogRouter from './routers/blog-routes';

config()
const app = express();

app.use(express.json())

app.use("/api/user",router) 
app.use("/api/blog",blogRouter) 



mongoose.connect(
    process.env.MONGO_URL
).then(()=>app.listen(5000)).then(()=>console.log("Connected Too Database and Listening to Localhost 5000")).catch((err)=>console.log(err))

;

//tPnMCrQO3VlTpkBZ
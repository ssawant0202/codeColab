import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

//parsing middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.get('/', (request, response)=>{
    return response.status(234).send(`Welcome to the Mern`)
});
app.use('/register', userRoutes);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
        
    })
    .catch((error)=>{
        console.log(error);
    });


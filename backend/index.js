import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from "cors";
import {newUser} from './models/userModel.js';

const app = express();

//parsing middleware
app.use(express.json())
app.use(cookieParser())



app.get('/', (request, response)=>{
    return response.status(234).send(`Welcome to the Mern`)
});

// Route for save a new user
app.post('/register', async(request, response)=>{
    try{
        if(
            !request.body.email ||
            !request.body.username||
            !request.body.password
        ){
            return response.status(400).send({
                message: 'Send all required fields: email, username, password',
            });
        }
        const user = {
            email: request.body.email, 
            username: request.body.username,
            password: request.body.password,
        };
        const tempUser = await newUser.create(user);
        return response.status(201).send(tempUser);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
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


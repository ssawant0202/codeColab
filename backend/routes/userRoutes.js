import express from 'express'; 
import {newUser} from '../models/userModel.js';
const router = express.Router();

// Route for save a new user
router.post('/', async(request, response)=>{
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

router.get('/', async(request, response)=>{
    try{
        const users = await newUser.find({});
        return response.status(200).json({
            count: users.length,
            data: users
        });  
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

// return user by email
router.get('/:id', async(request, response)=>{
    try{
        const {id} = request.params;
        const user = await newUser.findById(id);
        return response.status(201).send(user);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

router.put('/:id', async(request, response)=>{
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
        const {id} = request.params;
        const result = await newUser.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).send({message: 'User not found'});
        }
        return response.status(200).send({message: 'User updated successfully!'});
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
// return user by email
router.delete('/:id', async(request, response)=>{
    try{
        const {id} = request.params;
        const result = await newUser.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message: 'User not found'});
        }
        return response.status(200).send({message: 'User deleted successfully!'});
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

export default router;


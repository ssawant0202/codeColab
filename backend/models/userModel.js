import mongoose from "mongoose";

const registerSchema = mongoose.Schema(
    {
        email:{
            type: String, 
            required: true,
        },
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);
export const newUser = mongoose.model('newUser',registerSchema);
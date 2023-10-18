import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },

},{timestamps:true});

userSchema.pre('save',async function(next){
    try {
        if(this.isModified('password')){
            this.password = await bcryptjs.hash(this.password,12);
        }
    } catch (error) {
        next(error);
    }
})

const User = mongoose.model('User',userSchema);

export default User;
import mongoose from 'mongoose';

const{Schema, model} = mongoose;

const userSchema = new Schema({
    id:Number,
    name:String,
    dob:String,
    address:String,
    description:String,
    createdAt: Date,

},{
    timestamps:true,
})

const Model = model('User', userSchema);

export default Model;

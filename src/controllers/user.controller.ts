import {User} from '../models/user.model';
import { Request, Response } from 'express';

const user = new User();

const create = (req:Request, res:Response)=>{

    // res.status(200).json({"msg":"it works"})
    user.createUser(req.body,(err:any, doc:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "user has not been created"}});
            console.log('user not created');
        } else{
            res.status(200).json(doc)
            console.log('user created')
        }
    });
}
const getAll = (req:Request, res:Response)=>{

    // res.status(200).json({"msg":"it works"})
    user.getUsers((err:any, doc:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "user has not been updated"}});
            console.log('could not get user');
            
        } else{
            res.status(200).json(doc)
            console.log('gotten users')
        }
    });
}
const getOne = (req:Request, res:Response)=>{

    // res.status(200).json({"msg":"it works"})
    user.getSingleUser(req.params.id,(err:any, doc:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "user could not be gotten"}});
            console.log('could not get user');
        } else{
            res.status(200).json(doc)
            console.log('user gotten')
        }
    });
}
const update = (req:Request, res:Response)=>{

    // res.status(200).json({"msg":"it works"})
    user.updateUser(req.params.key,{...req.body},(err:any,doc:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "user has not been updated"}});
            console.log('user not created');
            
        } else{
            res.status(200).json(doc)
            console.log('user updated')
        }
    });
}
const deleteUser = (req:Request, res:Response)=>{

    // res.status(200).json({"msg":"it works"})
    user.deleteUser(req.params.id,(err:any,doc:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "user has not been deleted"}});
            console.log('user not deleted');
            
        } else{
            res.status(200).json(doc)
            console.log('user deleted');
        }
    });
}
export {create,getAll,getOne,deleteUser,update}



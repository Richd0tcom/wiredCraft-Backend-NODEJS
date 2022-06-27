import mongoose from 'mongoose';
import Model from './user.schema';


class User {

    async createUser(userObject:Object, callback:(err:any, data:any)=>any){
        try {
            const nwBlg = await Model.create({...userObject});
            const temp = await nwBlg.save();
            callback(null,temp);
            
        } catch (error) {
            console.log(error);
            callback(error, null)
            return;
        }
    }
    async getUsers(callback:(err:any, data:any)=>any){
        try {
            const usr = await Model.find()
            callback(null,usr)
        } catch (error) {
            console.log(error)
        }
    }
    async getSingleUser(userDetail:any, callback:(err:any, data:any)=>any){
        try {
            const usr = await Model.findOne({...userDetail})
            callback(null, usr)
        } catch (error) {
            callback(error, null)
            console.log(error);
            
        }
    }
    async updateUser(filter:any, update:any,callback:(err:any, data:any)=>any){
        try {
            const usr = await Model.findOneAndUpdate(filter, {$set: update},{new:true});
            callback(null, usr)
        } catch (error) {
            console.log(error);
            callback(error,null);
            return;
        }
    }
    async deleteUser(filter:any, callback:(err:any, data:any)=>any){
        try {
            const usr = await Model.findOneAndDelete();
            callback(null, usr);
        } catch (error) {
           console.log(error)
            callback(error, null)
        }
    }
}

export {User}


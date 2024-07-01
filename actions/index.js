"use server" ;

import connectToDb from "@/database"
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export async function DeleteUser(req){
    try {
        await connectToDb();

        const id = await req.json();

        const deleteUser = User.findByIdAndDelete(id);

        if(deleteUser){
            console.log("succesfully deleted the user");
            return {
                success : true ,
                message : "succesfully deleted the user"
            }
        }
        else {
            return {
                success : false ,
                message : "error deleting the user , try again later"
            }
        }
    }catch(e){
        return {
            success :false ,
            message : "something went wrong please try again later"
        }
    }
}

export async function AddNewUser(newUser , path){
    await connectToDb();
    try {
        console.log(newUser);

        const newEntry = User.create(newUser);

        if(newEntry){
            console.log("succsefullu registered a user")
            revalidatePath(path);
            return {
                success : true ,
                message : "succesfully registered a new user"
            }
        }
        else {
            return {
                success: false ,
                message : "something went wrong , please try again later"  ,
            }
        }


    }catch(e){
        return {
            success: false ,
            message : "something went wrong , please try again later " + e ,
        }
    }
}

export async function GetUsers(){
    await connectToDb();
    try {
        const userList = await User.find({}).lean();

        if(userList){
            console.log(userList)
            return {
                success : true,
                message : "succsefully fetched users" ,
                data : JSON.parse(JSON.stringify(userList))
            }
        }
        else {
            return {
                success : false ,
                message : "error fetching users from database" ,
            }
        }
    }catch(e){
        return {
            success : false ,
            message : e.message ,
        }
    }
}
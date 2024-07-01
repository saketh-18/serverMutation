"use client" ;

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter, 
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import { AddNewUser } from "@/actions";



export default function AddUser() {
    
    const intialUser = {
    firstName : "", 
    lastName : "" ,
    email :"" ,
    address :""
}
    const [newUser , setNewUser] = useState(intialUser);

    async function hanldeNewUser(){
        console.log(newUser)
        const res = await AddNewUser(newUser , "/");
        if(res){
            console.log(res.ok)
            return {
                success : true ,
                message : "succesfully added user to database"
            }
        }
    }
    

  return (
    <Dialog >
      <DialogTrigger className="m-2 bg-zinc-700 p-4 rounded-lg text-white">Add New User</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <Label>First Name</Label>
          <Input placeholder="enter first Name" value={newUser.firstName} onChange={(e) => {setNewUser({...newUser , firstName:e.target.value})}}/>
          <Label>Last Name</Label>
          <Input placeholder="enter Last Name" value={newUser.lastName} onChange={(e) => {setNewUser({...newUser , lastName:e.target.value})}}/>
          <Label>Email</Label>
          <Input placeholder="enter Email" value={newUser.email} onChange={(e) => {setNewUser({...newUser , email:e.target.value})}}/>
          <Label>Address</Label>
          <Input placeholder="enter address" value={newUser.address} onChange={(e) => {setNewUser({...newUser , address:e.target.value})}}/>
        </DialogHeader>
        <DialogClose><Button className="p-6 text-lg" onClick={hanldeNewUser}>Save</Button></DialogClose>
      </DialogContent>
    </Dialog>
  );
}

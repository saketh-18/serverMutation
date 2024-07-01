"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { DeleteUser, EditUser } from "@/actions";
import { useContext } from "react";
import { userContext } from "@/context";



export default function SingleCardUser({userList}) {

  const {setIsOpen , setEditUserId , setInitialFormData} = useContext(userContext);

  async function handleDelete(id){
    const res = await DeleteUser(id , "/")
  
    if(res){
      console.log("succesfully deleted user");
    }
    else {
      console.log("error deleting user");
    }
  }
  
  async function handleEdit(user){
    setIsOpen(true);
    setInitialFormData({
      firstName: user.firstName ,
      lastName: user.lastName ,
      email : user.email ,
      address : user.address
    });
    setEditUserId(user._id)

  }
  const users = userList.data;
  return (
    <div className="w-full gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {users && users.length > 0 ? (
        users.map((user) => (
          <Card key={user.email}>
            <CardTitle className="ml-4 text-3xl">{`${user.firstName} ${user.lastName}`}</CardTitle>
            <CardContent>
              <CardDescription className="text-slate-500">{user.email}</CardDescription>
            </CardContent>
            <CardFooter className="text-lg font-semibold">{user.address}</CardFooter>
            <div className="w-full flex justify-between">
              <Button variant="primary" className="p-6 bg-zinc-700 m-4 rounded button-edit-delete text-white" onClick={() => {handleEdit(user)}}>Edit</Button>
              <Button variant="primary" className="p-6 bg-zinc-700 m-4 rounded button-edit-delete text-white" onClick={() => {(handleDelete(user._id))}}>Delete</Button>
            </div>
          </Card>
        ))
      ) : (
        <p>No users available</p>
      )}
    </div>
  )
}

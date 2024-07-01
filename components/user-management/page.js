
import React from "react";
import SingleCardUser from "../single-user-card/page";
import AddUser from "../AddUser/page";
import { AddNewUser, GetUsers } from "@/actions";

export default async  function UserManagement() {
  
    const users = await GetUsers();
    console.log(users);

  return (
    <div className="flex flex-col">
      <p className="text-4xl font-semibold text-zinc-800 self-center m-4">
        All Users
      </p>
      <div className="self-end">
        <AddUser />
      </div>
      <div className=" m-2">
        <SingleCardUser userList={users}/>
      </div>
    </div>
  );
}

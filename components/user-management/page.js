
import React from "react";
import SingleCardUser from "../single-user-card/page";
import AddUser from "../AddUser/page";
import { GetUsers } from "@/actions";


export default async  function UserManagement() {

  const users = await GetUsers();
  console.log(users)

  return (
    <div className="flex flex-col">
      <p className="text-4xl font-semibold text-zinc-800 self-center m-4">
        All Users
      </p>
      <div className="self-end"><AddUser /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-2">
        <SingleCardUser userList={users}/>
      </div>
    </div>
  );
}

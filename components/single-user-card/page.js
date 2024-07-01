"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function SingleCardUser({userList}) {
  const users = userList.data;
  return (
    <div className="w-full gap-2  ">
    {users && users.length > 0 ? (
        users.map((user) => (
          <Card key={user.email}>
            <CardTitle className="ml-4 text-3xl">{`${user.firstName} ${user.lastName}`}</CardTitle>
            <CardContent>
              <CardDescription className="text-slate-500">{user.email}</CardDescription>
            </CardContent>
            <CardFooter className="text-lg font-semibold">{user.address}</CardFooter>
            <div className="w-full flex justify-between">
              <Button variant="primary">Edit</Button>
              <Button variant="primary">Delete</Button>
            </div>
          </Card>
        ))
      ) : (
        <p>No users available</p>
      )}
    </div>
  )
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { userContext } from "@/context";
import { AddNewUser, EditUser } from "@/actions";
import { intialUser } from "../utils";

export default function AddUser() {
  const {
    isOpen,
    setIsOpen,
    initialFormData,
    setInitialFormData,
    editUserId,
    setEditUserId,
  } = useContext(userContext);

  async function handleNewUser() {
    const res =
      editUserId !== null
        ? await EditUser(editUserId, initialFormData, "/")
        : await AddNewUser(initialFormData , "/");

        console.log(res);
        setIsOpen(false);
        setEditUserId(null);
        setInitialFormData(intialUser);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="m-2 bg-zinc-700 p-4 rounded text-white">
        Add New User
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="bg-white">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <Label>First Name</Label>
          <Input
            placeholder="enter first Name"
            value={initialFormData.firstName}
            onChange={(e) => {
              setInitialFormData({
                ...initialFormData,
                firstName: e.target.value,
              });
            }}
          />
          <Label>Last Name</Label>
          <Input
            placeholder="enter Last Name"
            value={initialFormData.lastName}
            onChange={(e) => {
              setInitialFormData({
                ...initialFormData,
                lastName: e.target.value,
              });
            }}
          />
          <Label>Email</Label>
          <Input
            placeholder="enter Email"
            value={initialFormData.email}
            onChange={(e) => {
              setInitialFormData({ ...initialFormData, email: e.target.value });
            }}
          />
          <Label>Address</Label>
          <Input
            placeholder="enter address"
            value={initialFormData.address}
            onChange={(e) => {
              setInitialFormData({
                ...initialFormData,
                address: e.target.value,
              });
            }}
          />
        </DialogHeader>
        <DialogClose>
          <Button
            className="p-6 text-lg bg-zinc-700 text-white rounded"
            onClick={() => handleNewUser(initialFormData)}
          >
            Save
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

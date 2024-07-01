import { intialUser } from "@/components/utils";
import { createContext, useState } from "react";

export const userContext = createContext(null);

export default function UserState({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [initialFormData, setInitialFormData] = useState(intialUser);
  const [editUserId, setEditUserId] = useState(null);

  return (
    <userContext.Provider
      value={{
        isOpen,
        setIsOpen,
        initialFormData,
        setInitialFormData,
        editUserId,
        setEditUserId,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

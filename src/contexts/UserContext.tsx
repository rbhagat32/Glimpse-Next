"use client";

import React, { createContext, useState, ReactNode, useMemo, useContext } from "react";

interface UserContextType {
  user: UserTypes | null;
  setUser: React.Dispatch<React.SetStateAction<UserTypes | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
  initialUser: UserTypes | null;
}

export function UserProvider({ children, initialUser }: UserProviderProps) {
  const [user, setUser] = useState<UserTypes | null>(initialUser);
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext value={value}>{children}</UserContext>;
}

export const useGetUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useGetUser must be used within a UserProvider");
  }
  return context.user;
};

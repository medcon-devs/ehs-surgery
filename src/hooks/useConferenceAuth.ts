"use client";

import * as React from "react";
import {
  clearAuthSession,
  getStoredUser,
  isLoggedIn as checkIsLoggedIn,
  saveAuthSession,
} from "@/lib/conference-storage";

export function useConferenceAuth() {
  const [user, setUser] = React.useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const storedUser = getStoredUser();
    setUser(storedUser);
    setIsLoggedIn(checkIsLoggedIn());
  }, []);

  const login = (userData: any, token: string) => {
    saveAuthSession(userData, token);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    clearAuthSession();
    setUser(null);
    setIsLoggedIn(false);
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
}
"use client";

import { useState, useEffect } from "react";

/*
  useAuth hook = user login আছে কিনা check করে

  localStorage এ user data save থাকে
  page refresh করলেও login থাকবে
  
  returns:
  - user: user এর data (null মানে login নেই)
  - isLoading: check করছে কিনা
  - login(): user কে login করায়
  - logout(): user কে logout করায়
*/

interface SimpleUser {
  uid: string;
  phone: string;
}

export function useAuth() {
  const [user, setUser] = useState<SimpleUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Page load হলে check করো আগে login ছিলো কিনা
  useEffect(() => {
    try {
      const saved = localStorage.getItem("novara-user");
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Auth check error:", e);
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = (uid: string, phone: string) => {
    const userData = { uid, phone };
    setUser(userData);
    localStorage.setItem("novara-user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("novara-user");
  };

  return {
    user,
    isLoading,
    isLoggedIn: !!user,
    login,
    logout,
  };
}
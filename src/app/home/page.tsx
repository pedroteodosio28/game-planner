'use client'
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    useAuth();
  }, []);
  
  return (
    <div className="w-full text-center gap-2">
      <p>Home</p>
    </div>
  );
};

export default HomePage;

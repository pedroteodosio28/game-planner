"use client";
import useAuth from "@/hooks/useAuth";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  const router = useRouter();

  const handlerLogout = () => {
    window.localStorage.removeItem("storageTokenGP");
    toast.error("Sessão Finalizada");
    router.replace("/login");
  };

  useEffect(() => {
    useAuth();
  }, []);

  return (
    <div className="w-full text-center gap-2">
      <div className="w-full flex flex-row justify-end py-4 px-4">
        <button
          className="cursor-pointer bg-gray-200 hover:bg-gray-600 p-2 transition delay-100 duration-150 rounded-full text-white"
          onClick={() => handlerLogout()}
        >
          <Icon icon="material-symbols:logout-rounded" width="24" height="24" />
        </button>
      </div>
      <p>Home</p>
    </div>
  );
};

export default HomePage;

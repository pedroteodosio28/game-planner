import { supabase } from "@/services/supabase";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const useAuth = async () => {
  const token = window.localStorage.getItem("storageTokenTT");

  if (token) {
    const { error } = await supabase.auth.getUser(token!);

    if (error) {
      toast.error('Sessão expirada, faça um novo login')
      console.log(error);
      return redirect("/login");
    } else {
      console.log("Logado");
    }
  }
};

export default useAuth;

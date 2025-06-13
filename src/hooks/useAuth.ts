import { supabase } from "@/services/supabase";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const useAuth = async () => {
  const token = window.localStorage.getItem("storageTokenGP");

  if (token) {
    const { data, error } = await supabase.auth.getUser(token);

    console.log(data);

    if (error) {
      toast.error("Sessão expirada, faça um novo login");
      console.log(error);
      return redirect("/login");
    } else {
      console.log("Logado");
    }
  } else {
    toast.error("Faça um novo login");
    return redirect("/login");
  }
};

export default useAuth;

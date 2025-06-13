"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

interface LoginData {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<LoginData | undefined>();

  const handlerLogin = async (params: LoginData) => {
    setIsLoading(true);

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(async (resp) => {
        console.log(resp);
        
        if(resp.status !== 200){
          toast.error('asdasd')
        }else {
          toast.success('Login com sucesso')
        }

        // window.localStorage.setItem("storageTokenGP", data.data);
        // redirect("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error('Erro no Login')
        
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className="w-4/5 space-y-6"
    >
      {error && (
        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="block ml-2 text-sm text-gray-900"
          >
            Lembrar de mim
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Esqueceu sua senha?
          </a>
        </div>
      </div>

      <div>
        <button
          disabled={isLoading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={() => handlerLogin({email, password})}
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </form>
  );
}

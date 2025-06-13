import { supabase } from "../../../services/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const params = await request.json();

    // Verifica se email e password foram fornecidos
    if (!params.email || !params.password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const { data: dataLogin, error } = await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password,
    });

    if (error) {
    
      // Tratamento específico para credenciais inválidas
      if (error.status === 400 && error.code === 'invalid_credentials') {
        return NextResponse.json(
          { 
            message: "Credenciais inválidas. Verifique seu email e senha.",
          },
          { status: 400 }
        );
      }
      
      // Outros erros de autenticação
      return NextResponse.json(
        { error: "Falha no login: " + error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        data: dataLogin.session?.access_token,
        message: "Login realizado com sucesso",
      },
      { status: 200 }
    );

  } catch (err) {
    console.error("Erro inesperado:", err);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor" },
      { status: 500 }
    );
  }
}
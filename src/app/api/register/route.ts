//POST

/*
1 - FRONT:
Criar Tela com esses campos:
- Nome
- Email
- Senha
- Telefone

- Fazer funcao de registrar no front e enviar para a rota de registro: '/api/register'

2 - API:
Receber os valores editados:

- Nome
- Email
- Senha
- Telefone


*/

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const params = await request.json();

    console.log('Parametros Backend:', params);
    
  } catch (err) {
    console.error("Erro inesperado:", err);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor" },
      { status: 500 }
    );
  }
}
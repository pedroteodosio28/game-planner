# **GamePlanner - PWA para Gestão de Peladas entre Amigos**  

![Next.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)  
![Supabase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)  

Um aplicativo **Progressive Web App (PWA)** desenvolvido em **Next** para organizar partidas entre amigos. Permite criar times, sortear jogadores, marcar jogos e gerenciar confirmações de presença.  

🔗 **Demo:** [Link em breve] | 📂 **Repositório:** [GitHub]()  

---  

## **📌 Índice**  
1. [Visão Geral](#-visão-geral)  
2. [Funcionalidades](#-funcionalidades)  
3. [Tecnologias Utilizadas](#-tecnologias-utilizadas)  
4. [Como Executar o Projeto](#-como-executar-o-projeto)  
5. [Estrutura do Projeto](#-estrutura-do-projeto)  
6. [Próximas Melhorias](#-próximas-melhorias)  
7. [Contribuição](#-contribuição)  
8. [Licença](#-licença)  

---  

## **🌐 Visão Geral**  
O **GamePlanner** é um PWA que ajuda grupos de amigos a organizarem partidas de forma simples e eficiente. Com ele, você pode:  
✅ **Criar times** e adicionar jogadores.  
✅ **Sortear equipes** automaticamente ou manualmente.  
✅ **Agendar jogos** e gerenciar confirmações.  
✅ **Acessar offline** (PWA).  

---  

## **⚙️ Funcionalidades**  

### **👥 Gestão de Jogadores e Times**  
- Cadastro de jogadores (nome, e-mail, posição).  
- Criação de times personalizados (nome, cor, escudo).  

### **🔀 Sorteio de Times**  
- Divisão automática ou manual de jogadores em times.  
- Balanceamento por nível (se houver avaliação de habilidades).  

### **📅 Agendamento de Jogos**  
- Criação de eventos com data, local e horário.  
- Convites por link ou notificação.  
- Confirmação de presença (✅ Presente / ❌ Falta).  

### **📊 Histórico e Estatísticas**  
- Registro de resultados e jogadores presentes.  
- Relatórios de participação (quem joga mais/falta mais).  

---  

## **🛠️ Tecnologias Utilizadas**  

| **Tecnologia**       | **Descrição**                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Next**             | Biblioteca JavaScript para construção da interface.                         |
| **TypeScript**       | Adiciona tipagem estática para melhor manutenção.                          |
| **Supabase**         | Backend (Auth, Firestore) para autenticação e banco de dados.              |
| **Material-UI**      | Componentes UI para um design consistente.                                 |
| **Workbox**          | Geração de Service Workers para suporte offline (PWA).                     |
| **Vercel**           | Hospedagem e deploy contínuo.                                              |

---  

## **🚀 Como Executar o Projeto**  

### **Pré-requisitos**  
- Node.js (v18+)  
- Yarn ou npm  

### **Passos para Execução**  

1. **Clone o repositório**  
   ```sh
   git clone https://github.com/joaomiiiguel/game-planner.git
   cd game-planner
   ```

2. **Instale as dependências**  
   ```sh
   yarn install  # ou npm install
   ```

3. **Inicie o servidor de desenvolvimento**  
   ```sh
   yarn start  # ou npm start
   ```

4. **Acesse o app**  
   Abra [http://localhost:3000](http://localhost:3000) no navegador.  

---  

## **📂 Estrutura do Projeto**  

```  
pelada-manager/  
├── public/              # Arquivos estáticos (ícone PWA, manifest.json)  
├── src/  
│   ├── components/      # Componentes React (Times, Sorteio, Jogadores)  
│   ├── pages/           # Telas (Home, Login, Agendamento)  
│   ├── services/        # Lógica de Supabase/API  
│   ├── styles/          # CSS/SCSS globais  
│   ├── App.tsx          # Componente principal  
│   └── index.tsx        # Ponto de entrada  
├── .env.example         # Variáveis de ambiente  
└── README.md            # Este arquivo  
```  

---  

## **🔜 Próximas Melhorias**  
- [ ] **Chat entre jogadores** (Integração com Firebase ou Socket.io).  
- [ ] **Avaliação de jogadores** (Sistema de estrelas ou habilidades).  
- [ ] **Integração com Google Maps** para localização do campo.  

---  

## **🤝 Contribuição**  
Contribuições são bem-vindas! Siga os passos:  
1. Faça um **fork** do projeto.  
2. Crie uma **branch** (`git checkout -b feature/nova-funcionalidade`).  
3. Faça **commit** das alterações (`git commit -m 'Adiciona nova funcionalidade'`).  
4. Envie o **push** (`git push origin feature/nova-funcionalidade`).  
5. Abra um **Pull Request**.  

---  

## **📜 Licença**  
Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.  

---  

**Desenvolvido com ❤️ por João Miguel** 🚀
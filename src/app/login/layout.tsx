import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Login | GamePlanner',
  description: 'Página de login do seu aplicativo',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body >
        <main className="min-h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
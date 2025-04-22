"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ApoiePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-950/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/eco.ico"
                  alt="Ecocompost Logo"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-green-500/20"
                />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">Ecocompost</h1>
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Home</Link>
                <Link href="/faq" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">FAQ</Link>
                <Link href="/blog" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Blog</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apoie o Ecocompost
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Sua contribuição é essencial para tornar a compostagem acessível e inteligente para todos.
            </p>
          </motion.div>

          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-green-500/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Como você pode ajudar?</h2>
              <p className="text-gray-300">
                Com sua contribuição, podemos continuar desenvolvendo e melhorando o Ecocompost.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Apoio Financeiro</h3>
                <p className="text-gray-300 mb-4">
                  Contribua com qualquer valor para ajudar no desenvolvimento e manutenção do projeto.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Desenvolvimento de novas funcionalidades
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Manutenção do aplicativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Suporte aos usuários
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Outras Formas de Apoio</h3>
                <p className="text-gray-300 mb-4">
                  Além do apoio financeiro, você pode ajudar de outras maneiras:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Compartilhar nas redes sociais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Dar feedback e sugestões
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Indicar para amigos
                  </li>
                </ul>
              </div>
            </div>

            {/* Support Button */}
            <div className="text-center">
              <a
                href="https://livepix.gg/composteiraeletrica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 group"
              >
                Apoiar o Projeto
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Ecocompost. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
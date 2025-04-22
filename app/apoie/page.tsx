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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ajude a Transformar o Futuro da Compostagem
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Sua contribuição é essencial para tornar a compostagem acessível e inteligente para todos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Como Apoiar Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Como Você Pode Apoiar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Apoio Financeiro",
                description: "Contribua com qualquer valor para ajudar no desenvolvimento e manutenção do projeto.",
                icon: "💰"
              },
              {
                title: "Divulgação",
                description: "Compartilhe nosso projeto nas redes sociais e ajude a espalhar a mensagem.",
                icon: "📢"
              },
              {
                title: "Feedback",
                description: "Nos ajude a melhorar compartilhando suas ideias e sugestões.",
                icon: "💡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Apoiar Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Por que Apoiar o Ecocompost?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Desenvolvimento de tecnologia sustentável</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Redução do impacto ambiental</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Inovação em compostagem doméstica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Educação ambiental acessível</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-500/10 rounded-2xl transform rotate-3"></div>
              <Image
                src="/eco.jpg"
                alt="Ecocompost em ação"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl relative"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metas Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Nossas Metas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Desenvolvimento",
                description: "Melhorias contínuas no aplicativo e integração com novos sensores.",
                progress: 60
              },
              {
                title: "Expansão",
                description: "Levar a tecnologia para mais pessoas e comunidades.",
                progress: 40
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="text-green-400 mt-2">{item.progress}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Junte-se a Nós</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Sua contribuição faz a diferença. Juntos, podemos transformar a forma como as pessoas lidam com seus resíduos orgânicos.
            </p>
            <button
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-lg font-medium"
              onClick={() => window.location.href = "https://www.instagram.com/projeto_c.e.b.o/"}
            >
              Apoiar o Projeto
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-950 py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative">
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">Ecocompost</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              </h3>
              <p className="text-gray-400">
                Transformando compostagem em uma experiência digital e sustentável.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative">
                Links Rápidos
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                    FAQ
                    <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                    Blog
                    <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                    Privacidade
                    <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                    Termos
                    <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Contato
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400 group">
                  contato@ecocompost.com.br
                  <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                </p>
                <p className="text-gray-400 group">
                  +55 (51) 99944-3472
                  <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative">
                Redes Sociais
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              </h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/ecocompost" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                </a>
                <a href="https://www.threads.net/@ecocompost" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                </a>
                <a href="https://www.instagram.com/projeto_c.e.b.o/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="block w-0 group-hover:w-full h-px bg-gradient-to-r from-green-500 to-transparent transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Ecocompost. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EndlessScroll from "./components/EndlessScroll";
import ImageModal from "./components/ImageModal";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const handleImageClick = (image: string, title: string, description: string) => {
    setSelectedImage({ image, title, description });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Cabeçalho */}
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
                <Link href="#beneficios" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Benefícios</Link>
                <Link href="#porque-usar" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Por que usar?</Link>
                <Link href="#equipe" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Equipe</Link>
                <Link href="#contato" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Contato</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforme sua Composteira em uma Experiência Digital
              </h2>
              <p className="text-lg text-white mb-8">
                Monitore sua composteira em tempo real, receba alertas inteligentes e contribua para um mundo mais sustentável.
              </p>
              <div className="flex gap-4">
                <a
                  href="#beneficios"
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
                >
                  Conhecer Benefícios
                </a>
                <a
                  href="https://www.instagram.com/projeto_c.e.b.o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-white px-8 py-3 rounded-full hover:bg-green-900 transition duration-300"
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-2xl transform rotate-3"></div>
                <div className="relative">
                  <Image
                    src="/eco.jpg"
                    alt="Ecocompost App"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <EndlessScroll />

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Benefícios do Ecocompost</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Redução de Resíduos",
                description: "Contribua para a redução de resíduos orgânicos em até 50%.",
                icon: "♻️"
              },
              {
                title: "Economia de Recursos",
                description: "Reduza custos com fertilizantes e adubos químicos.",
                icon: "💰"
              },
              {
                title: "Impacto Ambiental",
                description: "Diminua sua pegada de carbono e contribua para um planeta mais verde.",
                icon: "🌍"
              }
            ].map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{beneficio.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{beneficio.title}</h3>
                <p className="text-white">{beneficio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que usar Section */}
      <section id="porque-usar" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Por que escolher o Ecocompost?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">Tecnologia Inteligente</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-white">Monitoramento em tempo real da sua composteira</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-white">Alertas personalizados baseados em dados reais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-white">Interface intuitiva e fácil de usar</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">Sustentabilidade</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-white">Contribuição direta para um mundo mais sustentável</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-white">Redução significativa de resíduos orgânicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-white">Produção de adubo natural de alta qualidade</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section id="equipe" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Blume",
                role: "Desenvolvedor Full Stack",
                description: "Responsável pelo desenvolvimento do aplicativo e integração com sensores.",
                image: "/me.png"
              },
              {
                name: "Darlan Naressi",
                role: "Especialista em Compostagem",
                description: "Consultor técnico especializado em processos de compostagem.",
                image: "/dan.png"
              },
              {
                name: "Hannah Schmitz",
                role: "Designer UX/UI",
                description: "Criadora da experiência do usuário e interface do aplicativo.",
                image: "/hanna.webp"
              }
            ].map((membro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={membro.image}
                    alt={membro.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{membro.name}</h3>
                <p className="text-white font-medium mb-2">{membro.role}</p>
                <p className="text-white">{membro.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Showcase Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Interface Intuitiva e Moderna</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Conheça a experiência de usuário que torna o monitoramento da sua composteira simples e eficiente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "App Ecocompost©",
                description: "O aplicativo Ecocompost© é uma ferramenta inteligente que permite monitorar e gerenciar a compostagem de forma eficiente.",
                image: "/UXUI Ecocompost-App-Page-1.png"
              },
              {
                title: "Tela de Cadastro",
                description: "Crie sua conta para começar a usar o aplicativo",
                image: "/UXUI Ecocompost-App-Page-2.png"
              },
              {
                title: "Tela de Login",
                description: "Faça login para acessar o aplicativo",
                image: "/UXUI Ecocompost-App-Page-3.png"
              },
              {
                title: "Tela de Informações",
                description: "Acompanhe o histórico de compostagem, e ajuste a temperatura e umidade da composteira conforme necessário",
                image: "/UXUI Ecocompost-App-Page-4.png"
              },
              {
                title: "Conexão com a composteira",
                description: "Conecte sua composteira ao aplicativo",
                image: "/UXUI Ecocompost-App-Page-5.png"
              },
              {
                title: "Usuário",
                description: "Personalize o aplicativo do seu jeito!",
                image: "/UXUI Ecocompost-App-Page-6.png"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full transition duration-300 hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div className="w-full">
                      <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/90 mb-4">{item.description}</p>
                      <button
                        onClick={() => handleImageClick(item.image, item.title, item.description)}
                        className="px-4 py-2 bg-green-600/80 text-white rounded-lg hover:bg-green-600 transition duration-300 text-sm"
                      >
                        Saiba mais
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          imageUrl={selectedImage.image}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}

      {/* Footer */}
      <footer className="relative bg-gray-950 py-12 overflow-hidden">
        {/* Linhas decorativas */}
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

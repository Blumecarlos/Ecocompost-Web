"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-950/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/eco.ico"
                alt="Ecocompost Logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-green-500/20"
              />
              <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Ecocompost</h1>
            </Link>
          </div>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            <Link href="/" className="hover:text-green-400 transition duration-300">
              Guia Completo de Compostagem
            </Link>
          </h1>
          
          {/* Seção 1: O que pode ir na composteira */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">O que pode ir na composteira?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Materiais Aceitos ✅</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Cascas de frutas e legumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Folhas secas e grama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Borras de café e saquinhos de chá</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Cascas de ovos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Papelão e papel sem tinta</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Materiais Proibidos ❌</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Carne e produtos lácteos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Óleos e gorduras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Papel higiênico usado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Plantas doentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Produtos químicos</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 2: Erros comuns */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Erros Comuns na Compostagem</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Desequilíbrio de Materiais</h3>
                  <p className="text-gray-300">
                    Muitas pessoas colocam apenas materiais úmidos (verdes) ou apenas materiais secos (marrons). 
                    O ideal é manter uma proporção de 2:1 de materiais secos para úmidos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Falta de Aeração</h3>
                  <p className="text-gray-300">
                    A composteira precisa de oxigênio para decompor os materiais. 
                    Revolva o conteúdo a cada 2-3 dias para garantir a aeração adequada.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Excesso de Umidade</h3>
                  <p className="text-gray-300">
                    Uma composteira muito úmida pode ficar com mau cheiro. 
                    Adicione mais materiais secos se notar excesso de umidade.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Pedaços Muito Grandes</h3>
                  <p className="text-gray-300">
                    Cortar os materiais em pedaços menores acelera o processo de decomposição. 
                    Quanto menores os pedaços, mais rápida será a compostagem.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3: Como fazer compostagem */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Como Fazer Compostagem</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Escolha do Local</h3>
                  <p className="text-gray-300">
                    Escolha um local bem ventilado, com sombra parcial e fácil acesso. 
                    Pode ser em um canto do jardim ou em uma composteira fechada.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Preparação da Base</h3>
                  <p className="text-gray-300">
                    Comece com uma camada de galhos ou palha para garantir aeração na base. 
                    Isso ajuda na drenagem e circulação de ar.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Adição de Materiais</h3>
                  <p className="text-gray-300">
                    Adicione os materiais em camadas alternadas de materiais secos e úmidos. 
                    Mantenha a proporção de 2:1 (secos:úmidos).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Manutenção</h3>
                  <p className="text-gray-300">
                    Revolva o conteúdo a cada 2-3 dias, mantenha a umidade adequada 
                    (como uma esponja úmida) e monitore a temperatura.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Colheita do Composto</h3>
                  <p className="text-gray-300">
                    O composto estará pronto quando estiver escuro, úmido e com cheiro de terra. 
                    Isso geralmente leva de 2 a 6 meses, dependendo das condições.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4: Dicas para Iniciantes */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Dicas para Iniciantes</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Comece pequeno e vá aumentando conforme ganha experiência. 
                  Uma composteira pequena é mais fácil de gerenciar.
                </p>
                <p className="text-gray-300">
                  Mantenha um balde na cozinha para coletar os resíduos orgânicos 
                  antes de levá-los para a composteira.
                </p>
                <p className="text-gray-300">
                  Se notar mau cheiro, adicione mais materiais secos e revolva mais frequentemente.
                </p>
                <p className="text-gray-300">
                  Use o composto pronto para enriquecer o solo do seu jardim ou vasos de plantas.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      <footer id="footer" className="bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-medium"
            >
              Voltar para Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 
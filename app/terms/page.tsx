"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Cabeçalho */}
      <header className="bg-gray-950/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
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
          <h1 className="text-4xl font-bold mb-8">Termos de Uso e Política de Cookies</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Termos de Uso</h2>
            <p className="mb-4">Bem-vindo ao Ecocompost. Ao acessar e usar nosso site, você concorda com os seguintes termos e condições:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">1.1 Uso do Site</h3>
                <p>O Ecocompost é uma plataforma dedicada à promoção da sustentabilidade e compostagem. Você concorda em usar o site apenas para fins legais e de acordo com estes termos.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">1.2 Propriedade Intelectual</h3>
                <p>Todos os conteúdos, incluindo textos, imagens, logos e software, são propriedade do Ecocompost e estão protegidos por leis de direitos autorais.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">1.3 Limitação de Responsabilidade</h3>
                <p>O Ecocompost não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar o site.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Política de Cookies</h2>
            <p className="mb-4">Utilizamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com o uso de cookies.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">2.1 O que são Cookies?</h3>
                <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a melhorar a funcionalidade e a experiência do usuário.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">2.2 Tipos de Cookies que Utilizamos</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cookies Essenciais: necessários para o funcionamento básico do site</li>
                  <li>Cookies de Análise: nos ajudam a entender como os usuários interagem com o site</li>
                  <li>Cookies de Preferências: lembram suas escolhas e configurações</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">2.3 Como Gerenciar Cookies</h3>
                <p>Você pode controlar e/ou excluir cookies conforme desejar. Para mais informações, consulte as configurações do seu navegador.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Alterações nos Termos</h2>
            <p>Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão notificadas através do site.</p>
          </section>

          <div className="mt-8">
            <Link href="/" className="text-green-400 hover:text-green-300 transition">
              ← Voltar para a página inicial
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 
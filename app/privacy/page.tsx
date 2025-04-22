"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="mb-4">Esta Política de Privacidade descreve como o Ecocompost coleta, usa e protege suas informações pessoais quando você usa nosso site e serviços.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">2.1 Informações Pessoais</h3>
                <p>Podemos coletar as seguintes informações:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Nome e endereço de e-mail</li>
                  <li>Dados de localização</li>
                  <li>Informações de pagamento (quando aplicável)</li>
                  <li>Dados de uso da composteira</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">2.2 Dados de Uso</h3>
                <p>Coletamos automaticamente informações sobre como você interage com nosso site, incluindo:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Páginas visitadas</li>
                  <li>Tempo gasto em cada página</li>
                  <li>Dispositivo e navegador utilizados</li>
                  <li>Dados de desempenho da composteira</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Como Usamos Suas Informações</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">3.1 Finalidades</h3>
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Personalizar sua experiência</li>
                  <li>Enviar atualizações e notificações importantes</li>
                  <li>Analisar o desempenho da composteira</li>
                  <li>Garantir a segurança do sistema</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
            <p>Não vendemos suas informações pessoais. Podemos compartilhar dados com:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Prestadores de serviços que nos auxiliam na operação do site</li>
              <li>Autoridades legais quando exigido por lei</li>
              <li>Parceiros de pesquisa (dados anonimizados)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Segurança dos Dados</h2>
            <p>Implementamos medidas de segurança para proteger suas informações, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Criptografia de dados</li>
              <li>Controles de acesso</li>
              <li>Monitoramento de segurança</li>
              <li>Backups regulares</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar consentimento para processamento de dados</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p>Para questões sobre privacidade, entre em contato através do email: privacidade@ecocompost.com</p>
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
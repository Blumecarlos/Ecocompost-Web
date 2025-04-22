"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Notification from '../components/Notification';

export default function ParceriasPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
    show: boolean;
  }>({
    message: '',
    type: 'success',
    show: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/parcerias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({
          message: 'Proposta enviada com sucesso! Entraremos em contato em breve.',
          type: 'success',
          show: true,
        });
        setFormData({
          nome: '',
          email: '',
          empresa: '',
          mensagem: '',
        });
      } else {
        setNotification({
          message: data.error || 'Erro ao enviar a proposta. Tente novamente.',
          type: 'error',
          show: true,
        });
      }
    } catch (error) {
      console.error('Erro ao enviar a proposta:', error);
      setNotification({
        message: 'Erro ao enviar a proposta. Tente novamente.',
        type: 'error',
        show: true,
      });
    }
  };

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
                <Link href="/apoie" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 font-medium">Apoie</Link>
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seja um Parceiro do Ecocompost
            </h1>
            <p className="text-lg text-gray-300">
              Juntos, podemos transformar a compostagem e criar um futuro mais sustentável
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-green-500/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-white font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-white font-medium mb-2">
                  Empresa/Organização
                </label>
                <input
                  type="text"
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-white font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-lg font-medium"
                >
                  Enviar Proposta
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Outras Formas de Contato</h2>
            <p className="text-gray-300 mb-4">
              Você também pode entrar em contato conosco através de:
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/projeto_c.e.b.o/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition duration-300"
              >
                Instagram
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="mailto:blumec103@gmail.com"
                className="text-gray-400 hover:text-green-400 transition duration-300"
              >
                Email
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

      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}
    </div>
  );
} 
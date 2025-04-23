"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FAQPage() {
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
              Perguntas Frequentes
            </Link>
          </h1>

          {/* Seção 1: Perguntas Básicas */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Perguntas Básicas</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">O que é compostagem?</h3>
                <p className="text-gray-300">
                  A compostagem é um processo natural de decomposição de matéria orgânica que transforma resíduos em um adubo rico em nutrientes, chamado composto. É uma forma sustentável de reciclar resíduos orgânicos e reduzir o impacto ambiental.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Quanto tempo leva para fazer compostagem?</h3>
                <p className="text-gray-300">
                  O tempo varia de 2 a 6 meses, dependendo das condições como temperatura, umidade, tamanho dos materiais e frequência de revolvimento. Em condições ideais, pode levar cerca de 3 meses.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Posso fazer compostagem em apartamento?</h3>
                <p className="text-gray-300">
                  Sim! Existem composteiras específicas para ambientes internos, como as composteiras de minhocas ou as composteiras elétricas. Elas são compactas, não produzem mau cheiro e são ideais para apartamentos.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 2: Problemas e Soluções */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Problemas e Soluções</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Minha composteira está com mau cheiro. O que fazer?</h3>
                <p className="text-gray-300">
                  O mau cheiro geralmente indica excesso de umidade ou falta de aeração. Para resolver:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Adicione mais materiais secos (folhas, serragem)</li>
                  <li>Revolva o conteúdo para melhorar a aeração</li>
                  <li>Verifique se não há materiais proibidos</li>
                  <li>Reduza a quantidade de materiais úmidos</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Apareceram moscas na composteira. Como resolver?</h3>
                <p className="text-gray-300">
                  As moscas aparecem quando há exposição de matéria orgânica. Para evitar:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Cubra sempre os resíduos com material seco</li>
                  <li>Mantenha a tampa bem fechada</li>
                  <li>Evite colocar alimentos muito úmidos</li>
                  <li>Revolva o conteúdo regularmente</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">A compostagem está muito lenta. O que pode ser?</h3>
                <p className="text-gray-300">
                  A lentidão pode ser causada por vários fatores:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Pedaços muito grandes de material</li>
                  <li>Falta de umidade</li>
                  <li>Baixa temperatura ambiente</li>
                  <li>Desequilíbrio entre materiais secos e úmidos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 3: Dicas Avançadas */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Dicas Avançadas</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Como acelerar o processo de compostagem?</h3>
                <p className="text-gray-300">
                  Para acelerar a compostagem:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Triture os materiais em pedaços menores</li>
                  <li>Mantenha a proporção correta de materiais secos e úmidos</li>
                  <li>Revolva o conteúdo a cada 2-3 dias</li>
                  <li>Adicione um pouco de composto pronto para introduzir microrganismos</li>
                  <li>Mantenha a umidade adequada (como uma esponja úmida)</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Como saber se o composto está pronto?</h3>
                <p className="text-gray-300">
                  O composto está pronto quando:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Tem aparência escura e uniforme</li>
                  <li>Cheira a terra fresca</li>
                  <li>Não é possível identificar os materiais originais</li>
                  <li>Tem textura solta e esfarelenta</li>
                  <li>Está frio ao toque (não está mais em processo de decomposição)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 4: Uso do Composto */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-6">Uso do Composto</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Como usar o composto pronto?</h3>
                <p className="text-gray-300">
                  O composto pode ser usado de várias formas:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Como adubo para plantas e jardins</li>
                  <li>Como cobertura morta (mulch) para proteger o solo</li>
                  <li>Para melhorar a estrutura do solo</li>
                  <li>Em vasos e canteiros</li>
                  <li>Como substrato para mudas</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Quanto composto devo usar?</h3>
                <p className="text-gray-300">
                  A quantidade varia conforme o uso:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                  <li>Para vasos: misture 1 parte de composto para 3 partes de terra</li>
                  <li>Para jardins: aplique uma camada de 2-5 cm sobre o solo</li>
                  <li>Para canteiros: incorpore 5-10 cm de composto no solo</li>
                  <li>Para mudas: use composto puro ou misturado com areia</li>
                </ul>
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
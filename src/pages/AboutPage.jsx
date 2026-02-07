import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Target, Award, Users, Heart, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Acessibilidade',
      description: 'Acreditamos que ter um corpo saudável deve ser acessível e possível dentro da sua própria casa.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualidade Técnica',
      description: 'Selecionamos apenas equipamentos que atendem a padrões biomecânicos seguros.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Educação',
      description: 'Não vendemos apenas produtos, entregamos conhecimento para você treinar corretamente.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Durabilidade',
      description: 'Equipamentos feitos para durar, porque sua home gym é um investimento a longo prazo.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunidade',
      description: 'Unimos pessoas que valorizam a liberdade de treinar onde e quando quiserem.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Bem-estar',
      description: 'Focamos na saúde integral: corpo forte e mente sã através da consistência nos treinos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós - AffiliateHub | Especialistas em Home Gym</title>
        <meta name="description" content="Conheça nossa missão de democratizar o fitness através de equipamentos de qualidade para treino em casa." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Sobre a AffiliateHub
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
               A AffiliateHub nasceu da vontade de tornar o treino em casa mais simples, acessível e eficiente. Estamos construindo um espaço confiável para indicar equipamentos, compartilhar conhecimento e ajudar pessoas comuns a criarem sua própria rotina de treinos sem depender de academias lotadas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl"
            >
              <h2 className="text-4xl font-bold mb-6 text-center">Nossa Missão</h2>
              <p className="text-xl text-center leading-relaxed opacity-95">
               Tornar o treino em casa mais acessível, ajudando pessoas a encontrarem equipamentos confiáveis, informações claras e motivação para manter a consistência. Acreditamos que evolução física e bem-estar podem começar dentro do próprio lar, com simplicidade e constância.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Nossos Pilares</h2>
              <p className="text-lg text-gray-600">
                Os fundamentos que sustentam nossa curadoria e conteúdo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Quem Somos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
               A AffiliateHub é um projeto independente criado por entusiastas do treino em casa e da tecnologia. Nosso objetivo é pesquisar, organizar e indicar equipamentos que realmente façam sentido para quem deseja montar uma rotina de exercícios simples, prática e possível dentro da própria realidade.

              Estamos em constante evolução, aprendendo, testando e melhorando o conteúdo para entregar recomendações cada vez mais úteis e transparentes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-semibold shadow-sm">
                  Personal Trainers
                </div>
                <div className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-semibold shadow-sm">
                  Consultores de Equipamento
                </div>
                <div className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-semibold shadow-sm">
                  Nutricionistas Esportivos
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ArticleCard from '../components/ArticleCard';
import ProductCard from '../components/ProductCard';
import { useArticles } from '../contexts/ArticlesContext';
import { useProducts } from '../contexts/ProductContext';
import { Dumbbell, Home, Zap, DollarSign, ArrowRight, BookOpen } from 'lucide-react';

const HomePage = () => {
  const { articles } = useArticles();
  const { products } = useProducts();

  // Get first 3 items for featured sections
  const featuredArticles = articles.slice(0, 3);
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Treino em Casa',
      description: 'Transforme qualquer espaço em sua academia pessoal'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Alta Eficiência',
      description: 'Equipamentos selecionados para treinos rápidos e intensos'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Custo-Benefício',
      description: 'Economize com mensalidades de academia montando seu kit'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Qualidade Pro',
      description: 'Durabilidade e biomecânica de equipamentos profissionais'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AffiliateHub - Sua Academia em Casa Começa Aqui</title>
        <meta name="description" content="Guia completo de equipamentos para home gym. Halteres, barras, elásticos e tudo que você precisa para treinar em casa com eficiência." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1697490562519-3eb03dab6d5f"
              alt="Home gym workout"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-black/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Liberdade para
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  Treinar em Casa
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Descubra os melhores equipamentos para montar sua Home Gym.
                Treine no seu tempo, no seu ritmo e conquiste seus objetivos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/produtos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 text-white text-lg font-bold rounded-xl hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-900/50"
                >
                  <span>Ver Equipamentos</span>
                  <Dumbbell className="w-5 h-5" />
                </Link>
                <Link
                  to="/articles"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>Dicas de Treino</span>
                  <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Mais Procurados</h2>
                <p className="text-gray-600 text-lg">Equipamentos essenciais para começar</p>
              </div>
              <Link to="/produtos" className="hidden md:flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                Ver Loja Completa <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/produtos" className="inline-block px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg">
                Ver Todos os Produtos
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">Central de Conhecimento</h2>
                <p className="text-gray-400 text-lg">Aprenda a tirar o máximo do seu treino</p>
              </div>
              <Link to="/articles" className="hidden md:flex items-center gap-2 text-purple-400 font-semibold hover:gap-3 transition-all">
                Ler Todos os Artigos <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Sua jornada fitness começa em casa
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Não espere a segunda-feira. Monte seu espaço hoje e transforme sua saúde com conveniência e consistência.
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Começar Agora
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
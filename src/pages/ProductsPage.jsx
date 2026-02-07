import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductContext';
import { Filter } from 'lucide-react';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const { products, getAllCategories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = getAllCategories();
  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <>
      <Helmet>
        <title>Produtos - AffiliateHub | Descubra os Melhores Produtos</title>
        <meta name="description" content="Explore nossa seleção curada dos melhores produtos do mercado. Eletrônicos, fotografia e muito mais com os melhores preços." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Header Section */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nossos Produtos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra uma seleção cuidadosa dos melhores produtos do mercado, 
                escolhidos especialmente para você.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-12 flex-wrap"
            >
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Filter className="w-5 h-5" />
                <span>Filtrar:</span>
              </div>
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === ''
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-gray-600">
                  Nenhum produto encontrado nesta categoria.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer/> 
          </div>
    </>
  );
};

export default ProductsPage;
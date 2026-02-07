import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleCard';
import { useProducts } from '../contexts/ProductContext';
import { useArticles } from '../contexts/ArticlesContext';
import { ArrowLeft, ExternalLink, ShoppingCart, Shield, Truck as TruckIcon, Award, ArrowRight } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getProductById, products } = useProducts();
  const { getRelatedArticles } = useArticles();
  
  const product = getProductById(id);

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h2>
            <button
              onClick={() => navigate('/produtos')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Voltar aos Produtos
            </button>
          </div>
        </div>
      </>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const relatedArticles = getRelatedArticles(product.relatedArticles || []);

  const handleBuyNow = () => {
    window.open(product.affiliate_link, '_blank', 'noopener,noreferrer');
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para a página de compra.",
    });
  };

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: 'Garantia de Fábrica' },
    { icon: <TruckIcon className="w-6 h-6" />, text: 'Frete Grátis*' },
    { icon: <Award className="w-6 h-6" />, text: 'Qualidade Premium' }
  ];

  return (
    <>
      <Helmet>
        <title>{product.name} - AffiliateHub</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        <div className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/produtos')}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar aos Produtos</span>
            </motion.button>

            {/* Product Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    R$ {product.price.toFixed(2)}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="font-bold text-lg">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviewsCount} avaliações)</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="text-purple-600">{feature.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <button
                  onClick={handleBuyNow}
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Comprar Agora</span>
                  <ExternalLink className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Você será redirecionado para o site oficial do vendedor
                </p>
              </motion.div>
            </div>

            {/* Related Articles Section */}
            {relatedArticles.length > 0 && (
              <section className="py-12 border-t border-gray-200">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Aprenda Mais Sobre Este Equipamento
                  </h2>
                  <Link to="/articles" className="flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                    Ver Todos os Artigos <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ArticleCard article={article} />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="py-16 border-t border-gray-200 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Produtos Relacionados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProducts.map((relatedProduct, index) => (
                      <motion.div
                        key={relatedProduct.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <ProductCard product={relatedProduct} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};

const initialProducts = [
  // Halteres Ajustáveis
  {
    id: 'p1',
    name: 'Kit Halteres Ajustáveis 5-25kg',
    description: 'Sistema de ajuste rápido de peso, ideal para progressão de carga sem ocupar espaço. Substitui 15 pares de halteres convencionais.',
    price: 899.90,
    image: 'https://images.unsplash.com/photo-1703407999713-16b2d437dc87',
    category: 'Halteres Ajustáveis',
    rating: 4.8,
    reviewsCount: 124,
    affiliate_link: '#',
    relatedArticles: ['a1', 'a2']
  },
  {
    id: 'p2',
    name: 'Par de Halteres Sextavados 2-15kg',
    description: 'Design emborrachado que protege o piso e não rola. Pegada ergonômica cromada para maior conforto durante o exercício.',
    price: 450.00,
    image: 'https://images.unsplash.com/photo-1703407999713-16b2d437dc87',
    category: 'Halteres Ajustáveis',
    rating: 4.9,
    reviewsCount: 89,
    affiliate_link: '#',
    relatedArticles: ['a2']
  },
  {
    id: 'p3',
    name: 'Halter Ajustável Profissional 10-30kg',
    description: 'Para quem busca cargas mais altas. Mecanismo de alta precisão e durabilidade superior. O melhor investimento para sua home gym.',
    price: 1299.90,
    image: 'https://images.unsplash.com/photo-1703407999713-16b2d437dc87',
    category: 'Halteres Ajustáveis',
    rating: 5.0,
    reviewsCount: 42,
    affiliate_link: '#',
    relatedArticles: ['a1', 'a2']
  },
  // Elásticos
  {
    id: 'p4',
    name: 'Kit Super Bands Resistência Variável',
    description: 'Conjunto completo com 5 níveis de intensidade. Perfeito para assistências na barra fixa, alongamentos e fortalecimento muscular.',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9',
    category: 'Elásticos',
    rating: 4.7,
    reviewsCount: 215,
    affiliate_link: '#',
    relatedArticles: ['a5', 'a1']
  },
  {
    id: 'p5',
    name: 'Mini Bands Loop Set Premium',
    description: 'Ideais para ativação de glúteos e estabilização de ombros. Material em látex natural de alta durabilidade que não enrola.',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9',
    category: 'Elásticos',
    rating: 4.6,
    reviewsCount: 340,
    affiliate_link: '#',
    relatedArticles: ['a5']
  },
  // Barras de Porta
  {
    id: 'p6',
    name: 'Barra de Porta Ajustável Standard',
    description: 'Instalação por pressão sem parafusos. Pegada em espuma confortável e suporta até 100kg. Essencial para treinos de costas.',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1590239683542-02b00a999f50',
    category: 'Barras de Porta',
    rating: 4.5,
    reviewsCount: 156,
    affiliate_link: '#',
    relatedArticles: ['a6']
  },
  {
    id: 'p7',
    name: 'Barra Fixa Multifuncional Heavy Duty',
    description: 'Múltiplas pegadas para variações de exercícios. Estrutura reforçada que permite exercícios abdominais e flexões de braço no chão.',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1590239683542-02b00a999f50',
    category: 'Barras de Porta',
    rating: 4.9,
    reviewsCount: 98,
    affiliate_link: '#',
    relatedArticles: ['a6', 'a1']
  },
  // Tapetes e Kettlebells
  {
    id: 'p8',
    name: 'Yoga Mat Premium Antiderrapante',
    description: 'Espessura ideal de 6mm para proteger articulações. Textura aderente que funciona mesmo com suor intenso. Fácil de limpar.',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed',
    category: 'Tapetes e Kettlebells',
    rating: 4.8,
    reviewsCount: 412,
    affiliate_link: '#',
    relatedArticles: ['a1', 'a3']
  },
  {
    id: 'p9',
    name: 'Kettlebell Ferro Fundido 8kg',
    description: 'Acabamento em pintura eletrostática e base plana para estabilidade. Perfeito para iniciantes em swings e agachamentos.',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1659134202480-800452946338',
    category: 'Tapetes e Kettlebells',
    rating: 4.9,
    reviewsCount: 67,
    affiliate_link: '#',
    relatedArticles: ['a4']
  },
  {
    id: 'p10',
    name: 'Kettlebell Competição 16kg',
    description: 'Padrão oficial de competição com dimensões uniformes. Alça polida para transições suaves sem machucar as mãos.',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1659134202480-800452946338',
    category: 'Tapetes e Kettlebells',
    rating: 5.0,
    reviewsCount: 45,
    affiliate_link: '#',
    relatedArticles: ['a4', 'a2']
  }
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('affiliate_products_v2');
    return stored ? JSON.parse(stored) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('affiliate_products_v2', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const getProductById = (id) => products.find(p => p.id === id);

  const getProductsByCategory = (category) => {
    if (!category) return products;
    return products.filter(p => p.category === category);
  };

  const getAllCategories = () => [...new Set(products.map(p => p.category))];

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById,
      getProductsByCategory,
      getAllCategories
    }}>
      {children}
    </ProductContext.Provider>
  );
};
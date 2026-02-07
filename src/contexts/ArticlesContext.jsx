import React, { createContext, useContext, useState } from 'react';

const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
};

const initialArticles = [
  {
    id: 'a1',
    title: 'Como Montar sua Academia em Casa com Pouco Espaço',
    description: 'Dicas essenciais para quem quer treinar em casa mas mora em apartamento pequeno. Aprenda a escolher equipamentos versáteis.',
    coverImage: 'https://images.unsplash.com/photo-1665712375544-2b50a21200db',
    category: 'Dicas',
    publicationDate: '2023-10-15',
    externalLink: '#',
    relatedProducts: ['p1', 'p2', 'p4']
  },
  {
    id: 'a2',
    title: 'Treino Full Body com Halteres Ajustáveis',
    description: 'Um guia completo de exercícios para trabalhar o corpo todo utilizando apenas um par de halteres. Economize tempo e dinheiro.',
    coverImage: 'https://images.unsplash.com/photo-1703407999713-16b2d437dc87',
    category: 'Treino',
    publicationDate: '2023-10-20',
    externalLink: '#',
    relatedProducts: ['p1', 'p2', 'p3']
  },
  {
    id: 'a3',
    title: 'Nutrição Pós-Treino para Hipertrofia',
    description: 'O que comer depois do treino em casa para maximizar seus ganhos de massa muscular e recuperação.',
    coverImage: 'https://images.unsplash.com/photo-1603077492579-39ff927823db',
    category: 'Nutrição',
    publicationDate: '2023-11-05',
    externalLink: '#',
    relatedProducts: ['p8', 'p9']
  },
  {
    id: 'a4',
    title: '5 Exercícios com Kettlebell para Queimar Gordura',
    description: 'Circuitos intensos de alta queima calórica utilizando apenas um kettlebell. Aumente seu metabolismo em casa.',
    coverImage: 'https://images.unsplash.com/photo-1659134202480-800452946338',
    category: 'Exercícios',
    publicationDate: '2023-11-12',
    externalLink: '#',
    relatedProducts: ['p9', 'p10']
  },
  {
    id: 'a5',
    title: 'Benefícios do Treino com Elásticos',
    description: 'Por que os elásticos de resistência são uma das melhores ferramentas para prevenção de lesões e fortalecimento articular.',
    coverImage: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9',
    category: 'Dicas',
    publicationDate: '2023-11-25',
    externalLink: '#',
    relatedProducts: ['p4', 'p5']
  },
  {
    id: 'a6',
    title: 'Calistenia para Iniciantes: Comece Hoje',
    description: 'Guia básico para começar na calistenia usando apenas o peso do corpo e uma barra de porta.',
    coverImage: 'https://images.unsplash.com/photo-1590239683542-02b00a999f50',
    category: 'Treino',
    publicationDate: '2023-12-01',
    externalLink: '#',
    relatedProducts: ['p6', 'p7']
  }
];

export const ArticlesProvider = ({ children }) => {
  const [articles] = useState(initialArticles);

  const getArticleById = (id) => articles.find(a => a.id === id);
  
  const getArticlesByCategory = (category) => {
    if (!category || category === 'Todos') return articles;
    return articles.filter(a => a.category === category);
  };

  const getRelatedArticles = (articleIds) => {
    if (!articleIds || articleIds.length === 0) return [];
    return articles.filter(article => articleIds.includes(article.id));
  };

  const getAllCategories = () => ['Todos', ...new Set(articles.map(a => a.category))];

  return (
    <ArticlesContext.Provider value={{ 
      articles, 
      getArticleById, 
      getArticlesByCategory, 
      getAllCategories,
      getRelatedArticles
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};
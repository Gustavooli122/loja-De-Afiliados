import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 text-xs font-bold rounded-full shadow-md text-white
            ${article.category === 'Treino' ? 'bg-blue-500' : ''}
            ${article.category === 'Nutrição' ? 'bg-green-500' : ''}
            ${article.category === 'Dicas' ? 'bg-purple-500' : ''}
            ${article.category === 'Exercícios' ? 'bg-orange-500' : ''}
          `}>
            {article.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{new Date(article.publicationDate).toLocaleDateString('pt-BR')}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {article.description}
        </p>

        <a
          href={article.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all"
        >
          Ler Artigo <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
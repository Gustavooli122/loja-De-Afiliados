import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import { ArticlesProvider } from './contexts/ArticlesContext';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <ProductProvider>
      <ArticlesProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/produtos/:id" element={<ProductDetailPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
          </Routes>
        </Router>
      </ArticlesProvider>
    </ProductProvider>
  );
}

export default App;
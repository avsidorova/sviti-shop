import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Catalog.css';

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('все');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  // Фильтрация товаров по категории и поиску
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'все' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Сортировка товаров
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        <h1 className="catalog-title">Каталог товаров SVITI</h1>
        
        {/* Поиск и фильтры */}
        <div className="catalog-controls">
          <div className="search-section">
            <h3>Поиск товаров:</h3>
            <input
              type="text"
              placeholder="Найти костюм..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-section">
            <h3>Категории:</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="sort-section">
            <h3>Сортировка:</h3>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">По названию</option>
              <option value="price-low">По цене (сначала дешевые)</option>
              <option value="price-high">По цене (сначала дорогие)</option>
            </select>
          </div>
        </div>

        {/* Результаты поиска */}
        {searchTerm && (
          <div className="search-results">
            Найдено {sortedProducts.length} товаров по запросу "{searchTerm}"
          </div>
        )}

        {/* Сетка товаров */}
        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Если товаров нет */}
        {sortedProducts.length === 0 && (
          <div className="no-products">
            <h3>Товары не найдены</h3>
            <p>Попробуйте изменить параметры поиска или выбрать другую категорию</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('все');
              }}
              className="reset-filters-btn"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
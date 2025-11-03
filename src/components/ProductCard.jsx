import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor, selectedSize);
    setShowQuickAdd(false);
  };

  const hasDiscount = product.discount && product.originalPrice;
  const savings = hasDiscount ? product.originalPrice - product.price : 0;

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setShowQuickAdd(true)}
      onMouseLeave={() => setShowQuickAdd(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        
        {/* Бейдж скидки */}
        {hasDiscount && (
          <div className="discount-badge">
            -{product.discount}%
          </div>
        )}
        
        {/* Ценник */}
        <div className="product-price">
          {hasDiscount ? (
            <div className="discount-price">
              <span className="current-price">{product.price} ₽</span>
              <span className="original-price">{product.originalPrice} ₽</span>
            </div>
          ) : (
            <span>{product.price} ₽</span>
          )}
        </div>
        
        {/* Кнопка быстрого добавления */}
        {showQuickAdd && (
          <div className="quick-add-overlay">
            <div className="quick-add-options">
              <select 
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="quick-select"
              >
                {product.colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              
              <select 
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="quick-select"
              >
                {product.sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              
              <button 
                onClick={handleQuickAdd}
                className="quick-add-btn"
              >
                В корзину
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-colors">
          <span>Цвета: </span>
          {product.colors.slice(0, 3).map((color, index) => (
            <span key={index} className="color-dot" 
                  style={{ backgroundColor: getColorCode(color) }}></span>
          ))}
          {product.colors.length > 3 && (
            <span className="more-colors">+{product.colors.length - 3}</span>
          )}
        </div>
        
        <div className="product-sizes">
          Размеры: {product.sizes.join(', ')}
        </div>
        
        {/* Экономия - показываем только если есть скидка */}
        {hasDiscount && (
          <div className="savings">
            🔥 Экономия: {savings} ₽
          </div>
        )}
        
        <Link to={`/product/${product.id}`} className="view-product-btn">
          Подробнее
        </Link>
      </div>
    </div>
  );
}

// Функция для получения цвета
function getColorCode(color) {
  const colorMap = {
    'бежевый': '#F5F5DC',
    'красный': '#FF6B8B',
    'серый': '#808080',
    'голубой': '#87CEEB',
    'черный': '#000000',
    'коричневый': '#8B4513',
    'молочный': '#FFF8DC',
    'розовый': '#FFB6C1',
    'белый': '#FFFFFF',
    'айвори': '#FFFFF0'
  };
  return colorMap[color] || '#CCCCCC';
}

export default ProductCard;
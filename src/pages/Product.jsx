import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './Product.css';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: '#FF6B8B' }}>Товар не найден</h2>
        <button 
          onClick={() => navigate('/catalog')}
          style={{
            backgroundColor: '#FF6B8B',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            marginTop: '20px',
            cursor: 'pointer',
            fontFamily: "'Furore', sans-serif"
          }}
        >
          Вернуться в каталог
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Хлебные крошки */}
        <div className="breadcrumbs">
          <button 
            onClick={() => navigate('/catalog')}
            className="back-button"
          >
            ← Назад к каталогу
          </button>
        </div>

        <div className="product-details">
          {/* Изображение товара */}
          <div className="product-image-section">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
          </div>

          {/* Информация о товаре */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            
            <div className="product-price">
              {product.price} ₽
            </div>

            {/* Выбор цвета */}
            <div className="color-selection">
              <h3>Цвета:</h3>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <div 
                    key={index} 
                    className={`color-option ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <div 
                      className="color-circle"
                      style={{ 
                        backgroundColor: getColorCode(color),
                        border: color === 'белый' ? '1px solid #ddd' : 'none'
                      }}
                    ></div>
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Выбор размера */}
            <div className="size-selection">
              <h3>Размеры:</h3>
              <div className="size-options">
                {product.sizes.map((size, index) => (
                  <button 
                    key={index} 
                    className={`size-option ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Сообщение об успехе */}
            {showSuccess && (
              <div className="success-message">
                ✅ Товар добавлен в корзину!
              </div>
            )}

            {/* Кнопки действий */}
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Добавить в корзину
              </button>
              <button className="buy-now-btn">
                Купить сейчас
              </button>
            </div>

            {/* Дополнительная информация */}
            <div className="product-features">
              <div className="feature">
                <span>🚚 Бесплатная доставка от 5000₽</span>
              </div>
              <div className="feature">
                <span>↩️ Возврат в течение 14 дней</span>
              </div>
              <div className="feature">
                <span>📞 Консультация стилиста</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Функция для получения кода цвета
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

export default Product;
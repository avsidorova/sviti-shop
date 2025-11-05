import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { TruckIcon, ReturnIcon, DressIcon, GiftIcon } from '../components/Icons';
import './Home.css';

function Home() {
  // Берем 3 популярных товара для показа на главной
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Герой секция с фото фоном */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              SVITI
            </h1>
            
            <p className="hero-subtitle">
              Элегантность в каждой детали
            </p>
            
            <Link 
              to="/catalog"
              className="hero-cta-button"
            >
              Смотреть коллекцию
            </Link>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%',
        padding: '40px 20px'
      }}>
        
        {/* Преимущества */}
        <div className="benefits-section">
          <div className="benefit-card">
            <div className="benefit-icon">
              <TruckIcon size={32} />
            </div>
            <h3>Бесплатная доставка</h3>
            <p>При заказе от 5000₽</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <ReturnIcon size={32} />
            </div>
            <h3>Легкий возврат</h3>
            <p>В течение 14 дней</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <DressIcon size={32} />
            </div>
            <h3>Идеальная посадка</h3>
            <p>Размеры S-42 / M-46</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <GiftIcon size={32} />
            </div>
            <h3>Подарочная упаковка</h3>
            <p>Для каждого заказа</p>
          </div>
        </div>

        {/* Популярные товары */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#FF6B8B', 
            textAlign: 'center',
            marginBottom: '40px',
            fontFamily: "'Furore', sans-serif",
            fontSize: '2.2rem'
          }}>
            Популярные товары
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {featuredProducts.map(product => (
              <div key={product.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '20px',
                border: '1px solid #FFD1DC',
                textAlign: 'center'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '15px'
                  }}
                />
                <h3 style={{ 
                  color: '#333', 
                  marginBottom: '10px',
                  fontFamily: "'Furore', sans-serif"
                }}>
                  {product.name}
                </h3>
                <p style={{ 
                  color: '#FF6B8B',
                  fontSize: '1.2rem',
                  fontFamily: "'Furore', sans-serif",
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  {product.price} ₽
                </p>
                <Link 
                  to={`/product/${product.id}`}
                  style={{
                    display: 'inline-block',
                    background: '#FF6B8B',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontFamily: "'Furore', sans-serif",
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#FF4B6B';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#FF6B8B';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link 
              to="/catalog"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#FF6B8B',
                textDecoration: 'none',
                padding: '12px 30px',
                borderRadius: '8px',
                fontFamily: "'Furore', sans-serif",
                border: '2px solid #FF6B8B',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#FF6B8B';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#FF6B8B';
              }}
            >
              Весь каталог
            </Link>
          </div>
        </div>

        {/* О бренде */}
        <div style={{
          padding: '40px',
          backgroundColor: 'rgba(255, 107, 139, 0.05)',
          borderRadius: '15px',
          border: '1px solid #FFD1DC'
        }}>
          <h2 style={{ 
            color: '#FF6B8B', 
            marginBottom: '20px', 
            fontFamily: "'Furore', sans-serif",
            textAlign: 'center',
            fontSize: '2rem'
          }}>
            О бренде SVITI
          </h2>
          <p style={{ 
            color: '#666', 
            lineHeight: '1.6', 
            fontFamily: "'Furore', sans-serif", 
            textAlign: 'center',
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            SVITI — это гармония стиля и комфорта. Мы создаем одежду, которая подчеркивает 
            вашу индивидуальность и дарит ощущение легкости в течение всего дня. 
            Каждая коллекция — это тщательно продуманные модели из качественных материалов, 
            которые сочетают в себе современный дизайн и непревзойденный комфорт.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
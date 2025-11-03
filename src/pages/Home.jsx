import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  // Берем 3 популярных товара для показа на главной
  const featuredProducts = products.slice(0, 3);

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)', 
      padding: '40px 20px', 
      background: 'linear-gradient(135deg, #FFF0F5 0%, #FFFFFF 100%)',
      width: '100%'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Герой секция */}
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'linear-gradient(135deg, #FF6B8B 0%, #FF8FA3 100%)',
          borderRadius: '20px',
          color: 'white',
          marginBottom: '60px'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem',
            fontWeight: 'normal',
            letterSpacing: '3px',
            fontFamily: "'Furore', sans-serif",
            marginBottom: '20px'
          }}>
            SVITI
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem',
            fontFamily: "'Furore', sans-serif",
            letterSpacing: '1px',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Элегантность в каждой детали
          </p>
          
          <Link 
            to="/catalog"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#FF6B8B',
              textDecoration: 'none',
              padding: '15px 35px',
              borderRadius: '30px',
              fontFamily: "'Furore', sans-serif",
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#FF6B8B';
            }}
          >
            Смотреть коллекцию
          </Link>
        </div>

        {/* Преимущества */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            border: '1px solid #FFD1DC',
            padding: '25px',
            borderRadius: '20px',
            width: '250px',
            backgroundColor: 'white',
            boxShadow: '0 4px 15px rgba(255, 107, 139, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🚚</div>
            <h3 style={{ color: '#FF6B8B', marginBottom: '10px', fontFamily: "'Furore', sans-serif" }}>Бесплатная доставка</h3>
            <p style={{ color: '#888', fontSize: '14px', fontFamily: "'Furore', sans-serif" }}>При заказе от 5000₽</p>
          </div>
          
          <div style={{
            border: '1px solid #FFD1DC',
            padding: '25px',
            borderRadius: '20px',
            width: '250px',
            backgroundColor: 'white',
            boxShadow: '0 4px 15px rgba(255, 107, 139, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>↩️</div>
            <h3 style={{ color: '#FF6B8B', marginBottom: '10px', fontFamily: "'Furore', sans-serif" }}>Легкий возврат</h3>
            <p style={{ color: '#888', fontSize: '14px', fontFamily: "'Furore', sans-serif" }}>В течение 14 дней</p>
          </div>
          
          <div style={{
            border: '1px solid #FFD1DC',
            padding: '25px',
            borderRadius: '20px',
            width: '250px',
            backgroundColor: 'white',
            boxShadow: '0 4px 15px rgba(255, 107, 139, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>👗</div>
            <h3 style={{ color: '#FF6B8B', marginBottom: '10px', fontFamily: "'Furore', sans-serif" }}>Идеальная посадка</h3>
            <p style={{ color: '#888', fontSize: '14px', fontFamily: "'Furore', sans-serif" }}>Размеры S-42 / M-46</p>
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
    </div>
  );
}

export default Home;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import './App.css';

// Выносим навигацию в отдельный компонент
function Navigation() {
  const { getTotalItems } = useCart();
  
  return (
    <nav style={{
      backgroundColor: 'white',
      padding: '1.2rem',
      borderBottom: '2px solid #FFD1DC',
      boxShadow: '0 2px 10px rgba(255, 107, 139, 0.1)',
      fontFamily: "'Furore', sans-serif",
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <Link to="/" style={{
          color: '#FF6B8B',
          textDecoration: 'none',
          fontSize: '1.8rem',
          letterSpacing: '2px',
          fontFamily: "'Furore', sans-serif"
        }}>SVITI</Link>
        
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '40px',
          margin: 0,
          padding: 0,
          fontFamily: "'Furore', sans-serif"
        }}>
          <li><Link to="/" style={{color: '#FF6B8B', textDecoration: 'none', letterSpacing: '1px'}}>Главная</Link></li>
          <li><Link to="/catalog" style={{color: '#FF6B8B', textDecoration: 'none', letterSpacing: '1px'}}>Каталог</Link></li>
          <li>
            <Link to="/cart" style={{
              color: '#FF6B8B', 
              textDecoration: 'none', 
              letterSpacing: '1px',
              position: 'relative',
              padding: '5px 10px'
            }}>
              Корзина
              {getTotalItems() > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#FF6B8B',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  border: '2px solid white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </li>
          <li><Link to="/about" style={{color: '#FF6B8B', textDecoration: 'none', letterSpacing: '1px'}}>О нас</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App" style={{ minHeight: '100vh', width: '100%' }}>
          <Navigation />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


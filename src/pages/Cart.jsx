import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    getTotalItems,
    clearCart 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Корзина</h1>
          <div className="empty-cart">
            <p>Ваша корзина пуста</p>
            <a href="/catalog" className="continue-shopping-btn">
              Продолжить покупки
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Корзина</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.color}-${item.size}`} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-variants">
                    <span className="item-color">Цвет: {item.color}</span>
                    <span className="item-size">Размер: {item.size}</span>
                  </div>
                  <div className="item-price">{item.price} ₽</div>
                </div>
                
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id, item.color, item.size)}
                    className="remove-btn"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Итого</h3>
            <div className="summary-row">
              <span>Товары ({getTotalItems()}):</span>
              <span>{getTotalPrice()} ₽</span>
            </div>
            <div className="summary-row">
              <span>Доставка:</span>
              <span>Бесплатно</span>
            </div>
            <div className="summary-total">
              <span>Общая сумма:</span>
              <span>{getTotalPrice()} ₽</span>
            </div>
            
            <button className="checkout-btn">
              Оформить заказ
            </button>
            
            <button 
              onClick={clearCart}
              className="clear-cart-btn"
            >
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
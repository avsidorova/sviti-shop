import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Добавить товар в корзину
  const addToCart = (product, selectedColor, selectedSize) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item =>
        item.id === product.id &&
        item.color === selectedColor &&
        item.size === selectedSize
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, {
          ...product,
          color: selectedColor,
          size: selectedSize,
          quantity: 1
        }];
      }
    });
  };

  // Удалить товар из корзины
  const removeFromCart = (itemId, color, size) => {
    setCartItems(prevItems =>
      prevItems.filter(item =>
        !(item.id === itemId && item.color === color && item.size === size)
      )
    );
  };

  // Изменить количество товара
  const updateQuantity = (itemId, color, size, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.color === color && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Общая стоимость корзины
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Общее количество товаров
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Очистить корзину
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
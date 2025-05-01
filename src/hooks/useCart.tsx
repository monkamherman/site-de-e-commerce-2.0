
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number | null;
  category?: string;
  quantity?: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Casque Audio Premium",
      price: 199.99,
      image: "/placeholder.svg",
      quantity: 1
    },
    {
      id: 2,
      name: "Montre Connectée Sport",
      price: 249.99,
      image: "/placeholder.svg",
      quantity: 2
    }
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (product: Product) => {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { 
        ...product, 
        quantity: product.quantity || 1 
      }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return {
    cartItems,
    updateQuantity,
    removeItem,
    addToCart,
    clearCart,
    subtotal,
    shipping,
    total,
  };
};

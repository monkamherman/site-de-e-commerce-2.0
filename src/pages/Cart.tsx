
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import ActivePromotions from "@/components/cart/ActivePromotions";
import ProductSuggestions from "@/components/cart/ProductSuggestions";
import { useCart } from "@/hooks/useCart";
import { suggestedProducts, activePromotions } from "@/data/promotions";

const Cart = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeItem, 
    addToCart, 
    clearCart,
    subtotal,
    shipping,
    total
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar />
      
      <div className="bg-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Votre Panier</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span>/</span>
            <span>Panier</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild>
                  <Link to="/products">Continuer mes achats</Link>
                </Button>
                <Button variant="outline" onClick={clearCart}>
                  <Trash2 className="mr-2 h-4 w-4" /> Vider le panier
                </Button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary 
                subtotal={subtotal}
                shipping={shipping}
                total={total}
              />
              <ActivePromotions promotions={activePromotions} />
            </div>
          </div>
        )}

        {/* Product Suggestions */}
        {cartItems.length > 0 && (
          <ProductSuggestions
            products={suggestedProducts}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;

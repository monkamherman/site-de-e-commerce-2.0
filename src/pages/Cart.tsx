
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, Trash2, TruckIcon, Tag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
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

  // Suggested products data
  const suggestedProducts = [
    {
      id: 3,
      name: "Écouteurs Sans Fil",
      price: 89.99,
      image: "/placeholder.svg",
      discount: null
    },
    {
      id: 4,
      name: "Enceinte Bluetooth",
      price: 129.99,
      image: "/placeholder.svg",
      discount: null
    },
    {
      id: 5,
      name: "Support de Téléphone",
      price: 24.99,
      image: "/placeholder.svg", 
      discount: null
    },
    {
      id: 6,
      name: "Batterie Externe 10000mAh",
      price: 49.99,
      image: "/placeholder.svg",
      discount: null
    }
  ];

  // Active promotions
  const activePromotions = [
    {
      id: 1,
      title: "Livraison gratuite",
      code: "FREESHIP",
      description: "Livraison gratuite pour toute commande de plus de 50€",
      discount: "Frais de livraison offerts"
    },
    {
      id: 2,
      title: "10% sur les accessoires",
      code: "ACC10",
      description: "Profitez de 10% de réduction sur tous les accessoires",
      discount: "10%"
    },
    {
      id: 3, 
      title: "Offre spéciale nouveaux clients",
      code: "WELCOME15",
      description: "15% de réduction sur votre première commande",
      discount: "15%"
    }
  ];

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

  const addToCart = (product: any) => {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

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
          <Card className="p-8 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="rounded-full bg-gray-100 p-6">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold">Votre panier est vide</h2>
              <p className="text-gray-600 mb-6">
                Vous n'avez pas encore ajouté de produits à votre panier
              </p>
              <Button size="lg" asChild>
                <Link to="/products">Continuer mes achats</Link>
              </Button>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="p-4 flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-32 aspect-square bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <div className="font-bold text-lg">
                          {(item.price * item.quantity).toFixed(2)} €
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-auto">
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">Prix unitaire:</span>
                          <span className="font-medium">{item.price.toFixed(2)} €</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild>
                  <Link to="/products">Continuer mes achats</Link>
                </Button>
                <Button variant="outline" onClick={() => setCartItems([])}>
                  <Trash2 className="mr-2 h-4 w-4" /> Vider le panier
                </Button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Récapitulatif</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sous-total</span>
                      <span>{subtotal.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Livraison</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600">Gratuite</span>
                        ) : (
                          `${shipping.toFixed(2)} €`
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <TruckIcon className="h-4 w-4" />
                        <span>Livraison gratuite à partir de 50€</span>
                      </div>
                    )}
                    <div className="pt-3 mt-3 border-t border-gray-200">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-xl">{total.toFixed(2)} €</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        TVA incluse
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 p-6 pt-0">
                  <div className="w-full">
                    <div className="mb-2 text-sm font-medium">Code promo</div>
                    <div className="flex gap-2">
                      <Input placeholder="Entrez votre code" />
                      <Button variant="outline">Appliquer</Button>
                    </div>
                  </div>
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/checkout">Passer la commande</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Active Promotions Section */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Promotions actives</h3>
                  </div>
                  <div className="space-y-4">
                    {activePromotions.map((promo) => (
                      <div key={promo.id} className="bg-gray-50 rounded-md p-3 border border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{promo.title}</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {promo.discount}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{promo.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                            {promo.code}
                          </div>
                          <Button variant="outline" size="sm" className="text-xs h-7">
                            Appliquer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Product Suggestions */}
        {cartItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Vous pourriez aussi aimer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="p-2">
                    <AspectRatio ratio={1/1} className="overflow-hidden rounded-md bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="p-2 pt-3">
                      <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">{product.price.toFixed(2)} €</span>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8 px-2"
                          onClick={() => addToCart(product)}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

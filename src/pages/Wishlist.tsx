
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Trash2, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Casque Audio Premium",
      price: 199.99,
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 5,
      name: "Smartphone Ultra HD",
      price: 899.99,
      image: "/placeholder.svg",
      inStock: true
    },
    {
      id: 7,
      name: "Ordinateur Portable Fin",
      price: 1299.99,
      image: "/placeholder.svg",
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar />
      
      <div className="bg-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Ma Liste de Souhaits</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <Link to="/account" className="hover:text-primary">Mon compte</Link>
            <span>/</span>
            <span>Liste de souhaits</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {wishlistItems.length === 0 ? (
          <Card className="p-8 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="rounded-full bg-gray-100 p-6">
                <Heart className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold">Votre liste de souhaits est vide</h2>
              <p className="text-gray-600 mb-6">
                Vous n'avez pas encore ajouté de produits à votre liste de souhaits
              </p>
              <Button size="lg" asChild>
                <Link to="/products">Découvrir des produits</Link>
              </Button>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full aspect-square object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 bg-white rounded-full shadow hover:text-red-500"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    <Link to={`/product/${item.id}`} className="hover:text-primary">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="text-lg font-bold mb-3">{item.price.toFixed(2)} €</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={item.inStock ? "text-green-600" : "text-red-600"}>
                      {item.inStock ? "En stock" : "Rupture de stock"}
                    </span>
                    
                    <Button disabled={!item.inStock}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> 
                      Ajouter
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

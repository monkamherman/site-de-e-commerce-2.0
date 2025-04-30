
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NewProducts = () => {
  const [newProducts] = useState([
    {
      id: 1,
      name: "Casque Audio Premium",
      price: 199.99,
      image: "/placeholder.svg",
      category: "Audio",
      isNew: true,
      rating: 4.5,
      reviewCount: 28
    },
    {
      id: 2,
      name: "Montre Connectée Sport",
      price: 249.99,
      image: "/placeholder.svg",
      category: "Accessoires",
      isNew: true,
      rating: 4.3,
      reviewCount: 16
    },
    {
      id: 3,
      name: "Enceinte Bluetooth Portable",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Audio",
      isNew: true,
      rating: 4.8,
      reviewCount: 42
    },
    {
      id: 4,
      name: "Écouteurs Sans Fil",
      price: 129.99,
      image: "/placeholder.svg",
      category: "Audio",
      isNew: true,
      rating: 4.6,
      reviewCount: 35
    }
  ]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-yellow-400" 
            : i < rating 
              ? "text-yellow-400 fill-yellow-400 opacity-50" 
              : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Nouveaux Produits</h2>
          <Button variant="outline" asChild>
            <Link to="/products?sort=newest">Voir tout</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="aspect-square relative bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-white rounded-full hover:bg-gray-100"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-primary">Nouveau</Badge>
                )}
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <p className="text-sm text-gray-500">{product.category}</p>
                      <CardTitle className="mt-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 pb-2">
                <p className="text-xl font-bold">{product.price.toFixed(2)} €</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviewCount})</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-2">
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;

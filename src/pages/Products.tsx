
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Heart, Filter, Grid3X3, List } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const [products] = useState([
    {
      id: 1,
      name: "Casque Audio Premium",
      price: 199.99,
      image: "/placeholder.svg",
      category: "Audio",
      description: "Casque audio avec réduction de bruit active, autonomie de 30 heures et conception ultra-confortable."
    },
    {
      id: 2,
      name: "Montre Connectée Sport",
      price: 249.99,
      image: "/placeholder.svg",
      category: "Accessoires",
      description: "Montre connectée avec suivi GPS, cardiofréquencemètre et plus de 20 modes sportifs."
    },
    {
      id: 3,
      name: "Enceinte Bluetooth Portable",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Audio",
      description: "Enceinte portable waterproof avec autonomie de 24 heures et son 360°."
    },
    {
      id: 4,
      name: "Écouteurs Sans Fil",
      price: 129.99,
      image: "/placeholder.svg",
      category: "Audio",
      description: "Écouteurs intra-auriculaires avec réduction de bruit et mode transparence."
    },
    {
      id: 5,
      name: "Smartphone Ultra HD",
      price: 899.99,
      image: "/placeholder.svg",
      category: "Smartphones",
      description: "Smartphone avec écran Amoled 6.7\", triple caméra et processeur ultra-rapide."
    },
    {
      id: 6,
      name: "Tablette Graphique Pro",
      price: 349.99,
      image: "/placeholder.svg",
      category: "Ordinateurs",
      description: "Tablette graphique haute précision pour les designers et artistes professionnels."
    },
    {
      id: 7,
      name: "Ordinateur Portable Fin",
      price: 1299.99,
      image: "/placeholder.svg",
      category: "Ordinateurs",
      description: "Ordinateur portable ultraléger avec écran tactile et performance exceptionnelle."
    },
    {
      id: 8,
      name: "Chargeur Rapide Sans Fil",
      price: 49.99,
      image: "/placeholder.svg",
      category: "Accessoires",
      description: "Station de charge sans fil compatible avec tous les appareils récents."
    }
  ]);

  const categories = [
    { id: "audio", name: "Audio" },
    { id: "smartphones", name: "Smartphones" },
    { id: "ordinateurs", name: "Ordinateurs" },
    { id: "accessoires", name: "Accessoires" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white py-8 mb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Nos Produits</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span>/</span>
            <span>Produits</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5" /> Filtres
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Catégories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center gap-2">
                        <Checkbox id={`category-${category.id}`} />
                        <label htmlFor={`category-${category.id}`} className="text-sm">
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Prix</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-500">Min</label>
                      <input 
                        type="number" 
                        className="w-full mt-1 border rounded-md px-3 py-2" 
                        placeholder="0 €" 
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Max</label>
                      <input 
                        type="number" 
                        className="w-full mt-1 border rounded-md px-3 py-2" 
                        placeholder="2000 €" 
                      />
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Appliquer les filtres</Button>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="lg:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button 
                    variant={viewMode === "grid" ? "default" : "outline"} 
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "default" : "outline"} 
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-500">Affichage {products.length} produits</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm whitespace-nowrap">Trier par:</span>
                  <Select defaultValue="popularity">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Popularité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularité</SelectItem>
                      <SelectItem value="price_asc">Prix croissant</SelectItem>
                      <SelectItem value="price_desc">Prix décroissant</SelectItem>
                      <SelectItem value="newest">Plus récent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square relative bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">{product.category}</p>
                          <CardTitle className="mt-1">{product.name}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold">{product.price.toFixed(2)} €</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="sm:w-1/4 aspect-square bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="sm:w-3/4 flex flex-col">
                      <div className="mb-2">
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <h3 className="text-xl font-bold">{product.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                        <p className="text-xl font-bold">{product.price.toFixed(2)} €</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon">
                            <Heart className="h-5 w-5" />
                          </Button>
                          <Button>
                            <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled>
                  {"<"}
                </Button>
                <Button variant="default" size="icon">1</Button>
                <Button variant="outline" size="icon">2</Button>
                <Button variant="outline" size="icon">3</Button>
                <Button variant="outline" size="icon">
                  {">"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

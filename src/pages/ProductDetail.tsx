
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    id: 1,
    name: "Casque Audio Premium Ultra HD",
    price: 199.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Notre casque audio premium offre une qualité sonore exceptionnelle avec réduction de bruit active. Profitez d'une autonomie de 30 heures et d'un confort optimal grâce à ses coussinets en mousse à mémoire de forme.",
    features: [
      "Réduction de bruit active",
      "Autonomie de 30 heures",
      "Bluetooth 5.0",
      "Contrôles tactiles",
      "Microphones intégrés",
      "Pliable pour un transport facile"
    ],
    specifications: {
      "Marque": "AudioTech",
      "Modèle": "HD-5000",
      "Type": "Circum-aural",
      "Connectivité": "Bluetooth 5.0, Jack 3.5mm",
      "Autonomie": "30 heures",
      "Poids": "280g",
      "Couleur": "Noir",
      "Garantie": "2 ans"
    },
    rating: 4.7,
    reviewCount: 124,
    inStock: true
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const relatedProducts = [
    {
      id: 2,
      name: "Écouteurs Sans Fil Pro",
      price: 129.99,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Amplificateur Audio",
      price: 249.99,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Adaptateur Audio USB-C",
      price: 29.99,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Support pour Casque",
      price: 39.99,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-primary">Accueil</a>
            <span>/</span>
            <a href="/products" className="hover:text-primary">Produits</a>
            <span>/</span>
            <a href="/products?category=audio" className="hover:text-primary">Audio</a>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-4">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary"
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - vue ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviewCount} avis)</span>
              </div>

              <p className="text-3xl font-bold mb-6">{product.price.toFixed(2)} €</p>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Caractéristiques principales:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm mb-6">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">
                  <span className="font-semibold">Livraison gratuite</span> pour les commandes de plus de 50€
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Ajouter au panier
                </Button>
                
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="text-gray-500">Disponibilité:</div>
                  <div className={product.inStock ? "text-green-600" : "text-red-600"}>
                    {product.inStock ? "En stock" : "Rupture de stock"}
                  </div>
                  
                  <div className="text-gray-500">Référence:</div>
                  <div>{product.specifications.Modèle}</div>
                  
                  <div className="text-gray-500">Garantie:</div>
                  <div>{product.specifications.Garantie}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Tabs defaultValue="description">
            <TabsList className="mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Caractéristiques</TabsTrigger>
              <TabsTrigger value="reviews">Avis ({product.reviewCount})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="text-gray-700 space-y-4">
              <p>
                Le casque AudioTech HD-5000 est notre modèle premium conçu pour les amateurs de musique exigeants. 
                Grâce à sa technologie de réduction de bruit active avancée, vous pouvez vous immerger totalement dans 
                votre musique sans être dérangé par les bruits extérieurs.
              </p>
              <p>
                Avec une autonomie exceptionnelle de 30 heures, ce casque vous accompagnera tout au long de votre journée 
                ou même pendant vos longs voyages. La connectivité Bluetooth 5.0 assure une connexion stable et sans 
                latence avec tous vos appareils.
              </p>
              <p>
                Les coussinets en mousse à mémoire de forme s'adaptent parfaitement à la forme de votre tête pour un 
                confort optimal, même lors d'une utilisation prolongée. Le bandeau réglable et la conception légère 
                réduisent la fatigue.
              </p>
              <p>
                Pour une facilité d'utilisation maximale, le HD-5000 est équipé de contrôles tactiles intuitifs 
                vous permettant de gérer la lecture, le volume et les appels téléphoniques d'un simple toucher. 
                Les microphones intégrés offrent une clarté vocale exceptionnelle pour vos appels.
              </p>
            </TabsContent>
            
            <TabsContent value="specifications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="grid grid-cols-2 border-b pb-2">
                    <div className="font-medium">{key}</div>
                    <div className="text-gray-700">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold">{product.rating}</div>
                  <div className="flex justify-center mt-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{product.reviewCount} avis</div>
                </div>
                
                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    // Simulate percentages for each star rating
                    const percent = rating === 5 ? 70 : 
                                    rating === 4 ? 20 : 
                                    rating === 3 ? 7 : 
                                    rating === 2 ? 2 : 1;
                    return (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="flex items-center w-16">
                          <span className="text-sm">{rating}</span>
                          <Star className="h-4 w-4 ml-1 text-yellow-400 fill-yellow-400" />
                        </div>
                        <div className="h-2 flex-1 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="text-sm w-10 text-right">{percent}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sample reviews */}
              <div className="space-y-6">
                {[
                  { name: "Sophie M.", rating: 5, date: "12/03/2025", comment: "Ce casque est tout simplement incroyable. La qualité sonore est exceptionnelle et la réduction de bruit fonctionne parfaitement. Je l'utilise quotidiennement pour travailler et je ne pourrais plus m'en passer." },
                  { name: "Thomas D.", rating: 4, date: "28/02/2025", comment: "Très bon casque avec une excellente qualité audio. La batterie dure vraiment longtemps comme promis. Je retire une étoile car il est un peu lourd après plusieurs heures d'utilisation." },
                  { name: "Emma L.", rating: 5, date: "15/02/2025", comment: "Parfait pour mes voyages en train. La réduction de bruit est bluffante et le son est précis avec des basses profondes. Le rapport qualité-prix est excellent." }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>

              <Button>Voir tous les avis</Button>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Produits associés</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <p className="text-lg font-bold mb-3">{product.price.toFixed(2)} €</p>
                  <Button className="w-full">Voir le produit</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

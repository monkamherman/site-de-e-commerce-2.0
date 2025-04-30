
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Search, Menu, User, ChevronRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Casque Audio Premium",
      price: 199.99,
      image: "/placeholder.svg",
      category: "Audio"
    },
    {
      id: 2,
      name: "Montre Connectée Sport",
      price: 249.99,
      image: "/placeholder.svg",
      category: "Accessoires"
    },
    {
      id: 3,
      name: "Enceinte Bluetooth Portable",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Audio"
    },
    {
      id: 4,
      name: "Écouteurs Sans Fil",
      price: 129.99,
      image: "/placeholder.svg",
      category: "Audio"
    }
  ]);

  const categories = [
    { id: 1, name: "Audio", image: "/placeholder.svg" },
    { id: 2, name: "Smartphones", image: "/placeholder.svg" },
    { id: 3, name: "Ordinateurs", image: "/placeholder.svg" },
    { id: 4, name: "Accessoires", image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-bold">Worketyamo</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary">Accueil</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Produits</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Catégories</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Promotions</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">2</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Découvrez nos dernières technologies</h1>
              <p className="text-lg text-gray-600 mb-6">
                Des produits innovants pour améliorer votre quotidien
              </p>
              <Button className="px-8 py-6 text-lg">
                Acheter maintenant <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-64 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Image de produit à la une</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Produits à la Une</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Nos Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <Button variant="link" className="p-0 h-auto mt-1">
                    Explorer <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="max-w-md mb-8">
              Inscrivez-vous à notre newsletter pour recevoir les dernières offres et nouveautés
            </p>
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-4 py-2 rounded-md text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Worketyamo</h3>
              <p className="mb-4">La meilleure boutique pour tous vos besoins technologiques</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-md font-bold mb-4">Catégories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Smartphones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ordinateurs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessoires</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Promotions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-md font-bold mb-4">Informations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conditions générales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-md font-bold mb-4">Contact</h4>
              <address className="not-italic">
                <p className="mb-2">123 rue du Commerce</p>
                <p className="mb-2">75000 Paris, France</p>
                <p className="mb-2">+33 1 23 45 67 89</p>
                <p className="mb-2">contact@worketyamo.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2025 Worketyamo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

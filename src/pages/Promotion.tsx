
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Promotion = () => {
  // Mock promotion data
  const promotions = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Profitez de 30% sur tous les produits audio",
      image: "/placeholder.svg",
      endDate: "30 Juin 2025",
      code: "SUMMER30"
    },
    {
      id: 2,
      title: "Offre Exclusive",
      description: "Achetez un smartphone, recevez des écouteurs sans fil gratuits",
      image: "/placeholder.svg",
      endDate: "15 Juillet 2025",
      code: "FREEGIFT"
    },
    {
      id: 3,
      title: "Remise Accessoires",
      description: "Jusqu'à 40% de réduction sur tous les accessoires",
      image: "/placeholder.svg",
      endDate: "5 Août 2025",
      code: "ACC40"
    },
    {
      id: 4,
      title: "Flash Sale",
      description: "50% de réduction sur une sélection d'articles pendant 24h",
      image: "/placeholder.svg",
      endDate: "Demain minuit",
      code: "FLASH50"
    }
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Promotions & Offres Spéciales</h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos offres exclusives et promotions limitées pour économiser sur vos produits préférés.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Jusqu'au {promo.endDate}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                  <p className="mb-4 text-gray-600">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-100 px-3 py-2 rounded-md">
                      <span className="text-sm text-gray-500">Code promo:</span>
                      <span className="ml-2 font-bold">{promo.code}</span>
                    </div>
                    <Button asChild>
                      <Link to={`/products?promo=${promo.id}`}>En profiter</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informé des promotions</h2>
            <p className="mb-8">
              Inscrivez-vous à notre newsletter pour recevoir en avant-première nos offres spéciales
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-4 py-2 rounded-md text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>S'inscrire</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotion;

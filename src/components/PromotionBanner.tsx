
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PromotionBanner = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 to-primary/25 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Offre limitée
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jusqu'à 40% de réduction sur les écouteurs sans fil
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                Profitez de remises exceptionnelles sur notre gamme d'écouteurs premium.
                Offre valable jusqu'au 30 mai 2025.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/promotions">Voir les offres</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/products?category=audio">Explorer la collection</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-4 md:p-8 flex items-center">
              <AspectRatio ratio={4/3} className="w-full">
                <img 
                  src="/placeholder.svg"
                  alt="Promotion écouteurs sans fil"
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HomeHeader = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: "Nouveautés Tech 2025",
      subtitle: "Découvrez notre sélection de produits innovants",
      image: "/placeholder.svg",
      buttonText: "Découvrir",
      link: "/products",
      bgClass: "from-blue-50 to-indigo-100"
    },
    {
      id: 2,
      title: "Promotions d'été",
      subtitle: "Jusqu'à 40% de réduction sur une sélection d'articles",
      image: "/placeholder.svg",
      buttonText: "En profiter",
      link: "/promotions",
      bgClass: "from-orange-50 to-red-100"
    },
    {
      id: 3,
      title: "Nouvelles Enceintes Bluetooth",
      subtitle: "Un son exceptionnel pour tous vos moments",
      image: "/placeholder.svg",
      buttonText: "Voir la collection",
      link: "/products?category=audio",
      bgClass: "from-green-50 to-emerald-100"
    }
  ];

  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className={`bg-gradient-to-r ${banners[currentBanner].bgClass} py-8 md:py-16 relative`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{banners[currentBanner].title}</h1>
            <p className="text-lg text-gray-600 mb-6">
              {banners[currentBanner].subtitle}
            </p>
            <Button size="lg" asChild>
              <Link to={banners[currentBanner].link}>
                {banners[currentBanner].buttonText} <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-full max-w-md">
              <AspectRatio ratio={4/3}>
                <img 
                  src={banners[currentBanner].image} 
                  alt={banners[currentBanner].title}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-2 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/30 hover:bg-white/50"
          onClick={prevBanner}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute inset-y-0 right-2 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white/30 hover:bg-white/50"
          onClick={nextBanner}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            className={`w-3 h-3 rounded-full ${
              currentBanner === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHeader;

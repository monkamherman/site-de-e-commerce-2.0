
import { TruckIcon, CreditCard, RefreshCcw, HeadphonesIcon } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: <TruckIcon className="h-10 w-10" />,
      title: "Livraison rapide",
      description: "Livraison gratuite à partir de 50€"
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Paiement sécurisé",
      description: "Mobile Money ou à la livraison"
    },
    {
      icon: <RefreshCcw className="h-10 w-10" />,
      title: "Retours faciles",
      description: "Retours gratuits sous 30 jours"
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10" />,
      title: "Support client",
      description: "Assistance 7j/7 par chat"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;

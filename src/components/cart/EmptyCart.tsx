
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;

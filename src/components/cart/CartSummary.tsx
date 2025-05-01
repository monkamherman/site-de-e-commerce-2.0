
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TruckIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

const CartSummary = ({ subtotal, shipping, total }: CartSummaryProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Récapitulatif</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Sous-total</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Livraison</span>
            <span>
              {shipping === 0 ? (
                <span className="text-green-600">Gratuite</span>
              ) : (
                `${shipping.toFixed(2)} €`
              )}
            </span>
          </div>
          {shipping > 0 && (
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <TruckIcon className="h-4 w-4" />
              <span>Livraison gratuite à partir de 50€</span>
            </div>
          )}
          <div className="pt-3 mt-3 border-t border-gray-200">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-xl">{total.toFixed(2)} €</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              TVA incluse
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 p-6 pt-0">
        <div className="w-full">
          <div className="mb-2 text-sm font-medium">Code promo</div>
          <div className="flex gap-2">
            <Input placeholder="Entrez votre code" />
            <Button variant="outline">Appliquer</Button>
          </div>
        </div>
        <Button className="w-full" size="lg" asChild>
          <Link to="/checkout">Passer la commande</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;

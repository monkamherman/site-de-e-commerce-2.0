
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const CartItem = ({ item, updateQuantity, removeItem }: CartItemProps) => {
  return (
    <Card key={item.id} className="overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="sm:w-32 aspect-square bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <div className="font-bold text-lg">
              {(item.price * item.quantity).toFixed(2)} €
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-auto">
            <div className="flex items-center border rounded-md">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center">{item.quantity}</span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Prix unitaire:</span>
              <span className="font-medium">{item.price.toFixed(2)} €</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;

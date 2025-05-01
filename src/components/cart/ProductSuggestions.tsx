
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number | null;
}

interface ProductSuggestionsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductSuggestions = ({ products, onAddToCart }: ProductSuggestionsProps) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Vous pourriez aussi aimer</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="p-2">
              <AspectRatio ratio={1/1} className="overflow-hidden rounded-md bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </AspectRatio>
              <div className="p-2 pt-3">
                <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{product.price.toFixed(2)} €</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 px-2"
                    onClick={() => onAddToCart(product)}
                  >
                    Ajouter
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestions;

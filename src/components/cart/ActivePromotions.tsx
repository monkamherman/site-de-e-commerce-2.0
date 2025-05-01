
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface Promotion {
  id: number;
  title: string;
  code: string;
  description: string;
  discount: string;
}

interface ActivePromotionsProps {
  promotions: Promotion[];
}

const ActivePromotions = ({ promotions }: ActivePromotionsProps) => {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Promotions actives</h3>
        </div>
        <div className="space-y-4">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-gray-50 rounded-md p-3 border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{promo.title}</span>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {promo.discount}
                </Badge>
              </div>
              <p className="text-xs text-gray-600 mb-2">{promo.description}</p>
              <div className="flex items-center justify-between">
                <div className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                  {promo.code}
                </div>
                <Button variant="outline" size="sm" className="text-xs h-7">
                  Appliquer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivePromotions;

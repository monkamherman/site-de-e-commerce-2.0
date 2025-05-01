
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Phone, Check } from "lucide-react";

const CashOnDelivery = () => {
  const [notes, setNotes] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      toast({
        title: "Erreur",
        description: "Veuillez accepter les conditions de paiement à la livraison",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Mock order processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Commande confirmée",
        description: "Votre commande à payer à la livraison a été enregistrée",
      });
      // Redirect to success page or order confirmation
    }, 1500);
  };

  // Mock cart summary
  const orderSummary = {
    subtotal: 249.98,
    shipping: 5.99,
    tax: 12.50,
    total: 268.47
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Paiement à la livraison</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <Link to="/cart" className="hover:text-primary">Panier</Link>
            <span>/</span>
            <span>Paiement à la livraison</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 text-primary rounded-full">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Paiement à la livraison</h2>
              </div>
              
              <div className="mb-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-yellow-700">
                        Vous paierez le montant total au livreur lors de la réception de votre commande.
                        Veuillez vous assurer d'avoir le montant exact.
                      </p>
                    </div>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Le paiement se fait en espèces uniquement.</li>
                  <li>Veuillez préparer le montant exact pour éviter les problèmes de monnaie.</li>
                  <li>Une pièce d'identité pourra être demandée lors de la livraison.</li>
                  <li>Ce mode de paiement n'est disponible que pour les commandes inférieures à 500€.</li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="notes">Instructions spéciales (facultatif)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Informations supplémentaires pour la livraison..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte de payer le montant total à la livraison et je comprends que le refus de paiement 
                    à la réception entraînera l'annulation de ma commande.
                  </Label>
                </div>
                
                <Button type="submit" className="w-full" disabled={isProcessing}>
                  {isProcessing ? "Traitement..." : "Confirmer la commande"}
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-4">Autres méthodes de paiement</h3>
                <div className="flex gap-3">
                  <Link to="/payment/card">
                    <Button variant="outline" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Carte bancaire
                    </Button>
                  </Link>
                  <Link to="/payment/mobile">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Paiement mobile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Résumé de la commande</h3>
              
              <div className="space-y-2 pb-4 mb-4 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{orderSummary.subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span>{orderSummary.shipping.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TVA</span>
                  <span>{orderSummary.tax.toFixed(2)} €</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{orderSummary.total.toFixed(2)} €</span>
              </div>
              
              <div className="mt-6">
                <Link to="/cart">
                  <Button variant="outline" className="w-full">Retour au panier</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOnDelivery;


import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Check, CreditCard, Phone } from "lucide-react";

const MobilePayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un numéro de téléphone valide",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Mock verification process
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Code envoyé",
        description: "Un code de vérification a été envoyé à votre téléphone",
      });
      setIsVerified(true);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || code.length < 4) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer le code de vérification",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Mock payment process
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Paiement confirmé",
        description: "Votre paiement mobile a été traité avec succès",
      });
      // Redirect to success page or order confirmation
    }, 2000);
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
          <h1 className="text-3xl font-bold">Paiement Mobile</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <Link to="/cart" className="hover:text-primary">Panier</Link>
            <span>/</span>
            <span>Paiement Mobile</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 text-primary rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Paiement par téléphone mobile</h2>
              </div>
              
              <p className="mb-6 text-gray-600">
                Pour effectuer un paiement via votre compte mobile, veuillez suivre ces étapes:
              </p>
              
              {!isVerified ? (
                <form onSubmit={handleVerify} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Numéro de téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Ex: 06 12 34 56 78"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="max-w-md"
                    />
                  </div>
                  
                  <Button type="submit" disabled={isVerifying}>
                    {isVerifying ? "Vérification..." : "Recevoir le code"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Code de vérification</Label>
                    <div className="flex gap-2 max-w-xs">
                      <Input
                        id="code"
                        type="text"
                        placeholder="Entrez le code reçu"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-1"
                        maxLength={6}
                      />
                      <Button variant="outline" onClick={() => setIsVerified(false)}>
                        Modifier
                      </Button>
                    </div>
                  </div>
                  
                  <Button type="submit" disabled={isProcessing}>
                    {isProcessing ? "Traitement..." : "Confirmer le paiement"}
                  </Button>
                </form>
              )}
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-4">Autres méthodes de paiement</h3>
                <div className="flex gap-3">
                  <Link to="/payment/card">
                    <Button variant="outline" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Carte bancaire
                    </Button>
                  </Link>
                  <Link to="/payment/cash">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      Paiement à la livraison
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

export default MobilePayment;

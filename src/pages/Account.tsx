
import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  MapPin,
  CreditCard,
  Gift,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Account = () => {
  const [user] = useState({
    name: "Thomas Dupont",
    email: "thomas.dupont@example.com",
    avatar: "/placeholder.svg",
    points: 250
  });

  const navigate = useNavigate();

  const menuItems = [
    { icon: <User className="h-5 w-5" />, label: "Mon profil", link: "/account/profile" },
    { icon: <Package className="h-5 w-5" />, label: "Mes commandes", link: "/account/orders" },
    { icon: <Heart className="h-5 w-5" />, label: "Liste de souhaits", link: "/account/wishlist" },
    { icon: <MapPin className="h-5 w-5" />, label: "Adresses", link: "/account/addresses" },
    { icon: <CreditCard className="h-5 w-5" />, label: "Modes de paiement", link: "/account/payment-methods" },
    { icon: <Gift className="h-5 w-5" />, label: "Points fidélité", link: "/account/loyalty" },
    { icon: <Users className="h-5 w-5" />, label: "Parrainage", link: "/account/referrals" },
    { icon: <Settings className="h-5 w-5" />, label: "Paramètres", link: "/account/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Mon compte</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <span>Mon compte</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <Card className="p-6">
              <div className="flex items-center gap-4 pb-4 mb-4 border-b">
                <img 
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-lg">{user.name}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                  <div className="mt-1 text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-full inline-block">
                    {user.points} points fidélité
                  </div>
                </div>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-md text-gray-700 hover:text-primary"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Déconnexion
                </Button>
              </nav>
            </Card>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-3/4">
            <Outlet />
            
            {/* Default content when no child route is active */}
            {window.location.pathname === "/account" && (
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Tableau de bord</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg mb-1">Commandes récentes</h3>
                        <p className="text-gray-600">Vous avez 2 commandes en cours</p>
                      </div>
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <Button 
                      variant="link" 
                      className="px-0"
                      onClick={() => navigate("/account/orders")}
                    >
                      Voir mes commandes
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg mb-1">Liste de souhaits</h3>
                        <p className="text-gray-600">Vous avez 5 produits dans votre liste</p>
                      </div>
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <Button 
                      variant="link" 
                      className="px-0"
                      onClick={() => navigate("/account/wishlist")}
                    >
                      Voir ma liste de souhaits
                    </Button>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-5 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Programme de fidélité</h3>
                      <p>Vous avez {user.points} points - Prochain palier: 500 points</p>
                    </div>
                    <Button onClick={() => navigate("/account/loyalty")}>
                      Utiliser mes points
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-4">Parrainez vos amis</h3>
                  <p className="mb-4">Parrainez un ami et recevez 50 points de fidélité lorsqu'il effectue son premier achat.</p>
                  <Button onClick={() => navigate("/account/referrals")}>
                    Parrainer un ami
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

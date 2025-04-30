
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Globe,
  X,
} from "lucide-react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mock product data for search suggestions
  const products = [
    { id: 1, name: "Casque Audio Premium", category: "Audio" },
    { id: 2, name: "Montre Connectée Sport", category: "Accessoires" },
    { id: 3, name: "Enceinte Bluetooth Portable", category: "Audio" },
    { id: 4, name: "Écouteurs Sans Fil", category: "Audio" },
    { id: 5, name: "Smartphone Ultra HD", category: "Smartphones" },
  ];

  // Search functionality
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Focus search input when search is shown
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Translation helper
  const translate = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      "search": {
        "fr": "Rechercher",
        "en": "Search"
      },
      "account": {
        "fr": "Mon Compte",
        "en": "My Account"
      },
      "wishlist": {
        "fr": "Favoris",
        "en": "Wishlist"
      },
      "cart": {
        "fr": "Panier",
        "en": "Cart"
      },
      "home": {
        "fr": "Accueil",
        "en": "Home"
      },
      "products": {
        "fr": "Produits",
        "en": "Products"
      },
      "categories": {
        "fr": "Catégories",
        "en": "Categories"
      },
      "promotions": {
        "fr": "Promotions",
        "en": "Deals"
      },
      "contact": {
        "fr": "Contact",
        "en": "Contact"
      }
    };
    
    return translations[key]?.[language] || key;
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="text-xl font-bold">Worketyamo</Link>
          </div>
          
          {showSearch ? (
            <div className="absolute inset-x-0 top-0 bg-white p-4 flex items-center gap-3 z-10">
              <Search className="h-5 w-5 ml-2 text-gray-500" />
              <Input
                ref={searchInputRef}
                type="text"
                className="flex-1"
                placeholder={translate("search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="ghost" size="icon" onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
                setSearchResults([]);
              }}>
                <X className="h-5 w-5" />
              </Button>
              
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-md max-h-60 overflow-y-auto z-20">
                  <div className="p-2">
                    {searchResults.map(product => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="block p-2 hover:bg-gray-100 rounded-md"
                        onClick={() => {
                          setShowSearch(false);
                          setSearchQuery("");
                          setSearchResults([]);
                        }}
                      >
                        <div>{product.name}</div>
                        <div className="text-xs text-gray-500">{product.category}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-sm font-medium hover:text-primary">
                  {translate("home")}
                </Link>
                <Link to="/products" className="text-sm font-medium hover:text-primary">
                  {translate("products")}
                </Link>
                <Link to="/categories" className="text-sm font-medium hover:text-primary">
                  {translate("categories")}
                </Link>
                <Link to="/promotions" className="text-sm font-medium hover:text-primary">
                  {translate("promotions")}
                </Link>
                <Link to="/contact" className="text-sm font-medium hover:text-primary">
                  {translate("contact")}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Globe className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage("fr")}>
                      🇫🇷 Français {language === "fr" && "✓"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>
                      🇬🇧 English {language === "en" && "✓"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
                  <Search className="h-5 w-5" />
                </Button>
                
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/account">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="ghost" size="icon" asChild className="relative">
                  <Link to="/wishlist">
                    <Heart className="h-5 w-5" />
                    {wishlistCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                        {wishlistCount}
                      </Badge>
                    )}
                  </Link>
                </Button>
                
                <Button variant="ghost" size="icon" asChild className="relative">
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                        {cartCount}
                      </Badge>
                    )}
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

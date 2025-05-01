
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "Thomas",
    lastName: "Dupont",
    email: "thomas.dupont@example.com",
    phone: "06 12 34 56 78",
    dateOfBirth: "1985-07-15"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call to update profile
    setTimeout(() => {
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été enregistrées avec succès",
      });
      setIsEditing(false);
    }, 1000);
  };

  const handlePasswordReset = () => {
    toast({
      title: "Email envoyé",
      description: "Un email de réinitialisation de mot de passe vous a été envoyé",
    });
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mon Profil</h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            Modifier
          </Button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              readOnly={!isEditing}
              className={!isEditing ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              readOnly={!isEditing}
              className={!isEditing ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              readOnly={!isEditing}
              className={!isEditing ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              readOnly={!isEditing}
              className={!isEditing ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date de naissance</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              readOnly={!isEditing}
              className={!isEditing ? "bg-gray-50" : ""}
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-3">
            <Button type="submit">Enregistrer</Button>
            <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
              Annuler
            </Button>
          </div>
        )}
      </form>

      <div className="mt-10 pt-6 border-t">
        <h3 className="text-lg font-semibold mb-4">Sécurité du compte</h3>
        <div className="space-y-4">
          <Button variant="outline" onClick={handlePasswordReset}>
            Changer de mot de passe
          </Button>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium mb-2">Dernières connexions</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between">
                <span>Paris, France</span>
                <span className="text-gray-500">Aujourd'hui, 10:23</span>
              </li>
              <li className="flex justify-between">
                <span>Paris, France</span>
                <span className="text-gray-500">Hier, 19:45</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;

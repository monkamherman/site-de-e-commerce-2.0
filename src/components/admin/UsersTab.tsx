
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

// Mock user data
const mockUsers = [
  { 
    id: 1, 
    name: "Thomas Dupont", 
    email: "thomas.dupont@example.com", 
    role: "client", 
    status: "actif", 
    lastLogin: "2025-04-28",
    orders: 7
  },
  { 
    id: 2, 
    name: "Sophie Martin", 
    email: "sophie.martin@example.com", 
    role: "client", 
    status: "actif", 
    lastLogin: "2025-04-30",
    orders: 3
  },
  { 
    id: 3, 
    name: "Jean Lefebvre", 
    email: "jean.lefebvre@example.com", 
    role: "admin", 
    status: "actif", 
    lastLogin: "2025-05-01",
    orders: 0
  },
  { 
    id: 4, 
    name: "Marie Bernard", 
    email: "marie.bernard@example.com", 
    role: "client", 
    status: "inactif", 
    lastLogin: "2025-03-15",
    orders: 1
  },
  { 
    id: 5, 
    name: "Pierre Dubois", 
    email: "pierre.dubois@example.com", 
    role: "client", 
    status: "actif", 
    lastLogin: "2025-04-22",
    orders: 12
  }
];

const UsersTab = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusToggle = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === "actif" ? "inactif" : "actif" }
        : user
    ));
  };

  const handleRoleToggle = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, role: user.role === "admin" ? "client" : "admin" }
        : user
    ));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Gestion des utilisateurs</h2>
        <Button>
          <User className="mr-2 h-4 w-4" />
          Ajouter un utilisateur
        </Button>
      </div>

      <div className="mb-6">
        <Input
          placeholder="Rechercher par nom ou email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rôle</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Dernière connexion</TableHead>
            <TableHead>Commandes</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.role === "admin" ? "secondary" : "outline"}>
                  {user.role === "admin" ? "Admin" : "Client"}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={user.status === "actif" ? "success" : "destructive"}>
                  {user.status === "actif" ? "Actif" : "Inactif"}
                </Badge>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <TableCell>{user.orders}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      Actions
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleRoleToggle(user.id)}>
                      {user.role === "admin" ? "Définir comme client" : "Définir comme admin"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStatusToggle(user.id)}>
                      {user.status === "actif" ? "Désactiver" : "Activer"}
                    </DropdownMenuItem>
                    <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTab;

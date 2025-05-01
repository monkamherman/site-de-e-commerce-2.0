
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  MoreVertical, 
  Search, 
  UserPlus, 
  Filter, 
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const UsersTab = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      role: "Client",
      status: "active",
      lastActivity: "Il y a 2 heures",
      orders: 7
    },
    {
      id: 2,
      name: "Marie Laurent",
      email: "marie.laurent@example.com",
      role: "Client",
      status: "active",
      lastActivity: "Hier",
      orders: 12
    },
    {
      id: 3,
      name: "Thomas Bernard",
      email: "thomas.bernard@example.com",
      role: "Administrateur",
      status: "active",
      lastActivity: "En ligne",
      orders: 0
    },
    {
      id: 4,
      name: "Sophie Martin",
      email: "sophie.martin@example.com",
      role: "Client",
      status: "inactive",
      lastActivity: "Il y a 2 mois",
      orders: 3
    },
    {
      id: 5,
      name: "Luc Petit",
      email: "luc.petit@example.com",
      role: "Client",
      status: "blocked",
      lastActivity: "Il y a 1 an",
      orders: 1
    },
    {
      id: 6,
      name: "Claire Dubois",
      email: "claire.dubois@example.com",
      role: "Client",
      status: "active",
      lastActivity: "Il y a 3 jours",
      orders: 5
    },
    {
      id: 7,
      name: "Antoine Leroy",
      email: "antoine.leroy@example.com",
      role: "Client",
      status: "inactive",
      lastActivity: "Il y a 1 mois",
      orders: 2
    }
  ];

  // Filter users based on search term
  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.role.toLowerCase().includes(filter.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Toggle user status
  const toggleStatus = (userId: number, newStatus: boolean) => {
    toast({
      title: `Statut utilisateur mis à jour`,
      description: `L'utilisateur a été ${newStatus ? "activé" : "désactivé"}.`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600" variant="outline">Actif</Badge>;
      case "inactive":
        return <Badge variant="outline">Inactif</Badge>;
      case "blocked":
        return <Badge variant="destructive">Bloqué</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher des utilisateurs..."
              className="pl-8 w-full sm:w-[300px]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <Button size="icon" variant="outline">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          <span>Ajouter</span>
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead className="hidden md:table-cell">Activité</TableHead>
                <TableHead className="hidden md:table-cell">Commandes</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="hidden md:table-cell">{user.lastActivity}</TableCell>
                  <TableCell className="hidden md:table-cell">{user.orders}</TableCell>
                  <TableCell>
                    {getStatusBadge(user.status)}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                        <DropdownMenuItem>Modifier</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {currentUsers.length === 0 && (
            <div className="text-center p-4">
              <p className="text-muted-foreground">Aucun utilisateur trouvé</p>
            </div>
          )}

          <div className="flex items-center justify-between p-4 border-t">
            <div className="text-sm text-muted-foreground">
              Affichage de {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} sur {filteredUsers.length}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersTab;

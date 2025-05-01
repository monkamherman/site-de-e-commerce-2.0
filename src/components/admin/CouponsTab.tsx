
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Plus, Trash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CouponsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Coupons Management</h2>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Create Coupon
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Coupon Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input 
              placeholder="Search coupons..." 
              className="max-w-sm" 
            />
          </div>
          
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Used</TableHead>
                  <TableHead>Max Uses</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((item) => (
                  <TableRow key={item}>
                    <TableCell className="font-medium">SAVE{item * 10}</TableCell>
                    <TableCell>{item * 5}% OFF</TableCell>
                    <TableCell>{item * 3}</TableCell>
                    <TableCell>{item * 10}</TableCell>
                    <TableCell>June {10 + item}, 2023</TableCell>
                    <TableCell>
                      <Badge variant={item % 2 === 0 ? "default" : item % 3 === 0 ? "destructive" : "secondary"}>
                        {item % 2 === 0 ? "Active" : item % 3 === 0 ? "Expired" : "Limited"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouponsTab;

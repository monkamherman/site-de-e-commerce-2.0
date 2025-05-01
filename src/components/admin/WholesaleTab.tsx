
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const WholesaleTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Wholesale Requests</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input 
              placeholder="Search requests..." 
              className="max-w-sm" 
            />
          </div>
          
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((item) => (
                  <TableRow key={item}>
                    <TableCell className="font-medium">WH-{20000 + item}</TableCell>
                    <TableCell>Customer Name {item}</TableCell>
                    <TableCell>Product Name {item}</TableCell>
                    <TableCell>{item * 50} units</TableCell>
                    <TableCell>May {item}, 2023</TableCell>
                    <TableCell>
                      <Badge variant={item % 3 === 0 ? "default" : item % 3 === 1 ? "secondary" : "outline"}>
                        {item % 3 === 0 ? "Pending" : item % 3 === 1 ? "In Progress" : "Contacted"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm">View Details</Button>
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

export default WholesaleTab;

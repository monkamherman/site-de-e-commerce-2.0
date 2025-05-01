
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Package, Truck, Tag, User } from "lucide-react";
import ProductsTab from "@/components/admin/ProductsTab";
import WholesaleTab from "@/components/admin/WholesaleTab";
import PromotionsTab from "@/components/admin/PromotionsTab";
import CouponsTab from "@/components/admin/CouponsTab";
import UsersTab from "@/components/admin/UsersTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs 
        defaultValue={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package size={18} />
            <span className="hidden sm:inline">Products</span>
          </TabsTrigger>
          <TabsTrigger value="wholesale" className="flex items-center gap-2">
            <Truck size={18} />
            <span className="hidden sm:inline">Wholesale</span>
          </TabsTrigger>
          <TabsTrigger value="promotions" className="flex items-center gap-2">
            <Calendar size={18} />
            <span className="hidden sm:inline">Promotions</span>
          </TabsTrigger>
          <TabsTrigger value="coupons" className="flex items-center gap-2">
            <Tag size={18} />
            <span className="hidden sm:inline">Coupons</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <User size={18} />
            <span className="hidden sm:inline">Utilisateurs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ProductsTab />
        </TabsContent>
        
        <TabsContent value="wholesale">
          <WholesaleTab />
        </TabsContent>
        
        <TabsContent value="promotions">
          <PromotionsTab />
        </TabsContent>
        
        <TabsContent value="coupons">
          <CouponsTab />
        </TabsContent>
        
        <TabsContent value="users">
          <UsersTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;

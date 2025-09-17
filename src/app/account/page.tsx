"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard,
  Settings,
  LogOut,
  ArrowLeft,
  Edit,
  Plus,
  
} from "lucide-react";

type Order = {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: string;
  total: number;
  items: { id: string }[];
};

type Address = {
  id: string;
  type: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string | null;
  city: string;
  state?: string | null;
  postalCode: string;
  country: string;
  phone?: string | null;
  isDefault: boolean;
};

type Profile = {
  user: { id: string; name: string | null; email: string; role: string; createdAt: string };
  addresses: Address[];
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [editForm, setEditForm] = useState({ name: "", email: "", phone: "" });

  // Prefill from localStorage for instant display
  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
      if (raw) {
        const u = JSON.parse(raw);
        setProfile((prev) => prev ?? {
          user: {
            id: u.id,
            name: u.name ?? '',
            email: u.email,
            role: u.role ?? 'CUSTOMER',
            createdAt: new Date().toISOString(),
          },
          addresses: [],
        });
        setEditForm({ name: u.name ?? '', email: u.email ?? '', phone: '' });
      }
    } catch {}
  }, []);

  useEffect(() => {
    // Dummy data loader: simulate small delay then mark loading false
    const timer = setTimeout(() => {
      setOrders((prev) => prev.length ? prev : Array.from({ length: 3 }).map((_, i) => ({
        id: crypto.randomUUID(),
        orderNumber: `ORD-${Date.now()}-${i}`,
        createdAt: new Date(Date.now() - i * 86400000).toISOString(),
        status: i === 0 ? 'delivered' : i === 1 ? 'processing' : 'pending',
        total: Number((Math.random() * 200 + 20).toFixed(2)),
        items: Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map(() => ({ id: crypto.randomUUID() })),
      })));
      setProfile((p) => p ? p : {
        user: {
          id: crypto.randomUUID(),
          name: editForm.name || 'Guest User',
          email: editForm.email || 'guest@example.com',
          role: 'CUSTOMER',
          createdAt: new Date().toISOString(),
        },
        addresses: [],
      });
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [editForm.name, editForm.email]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { label: "Delivered", variant: "default" as const },
      shipped: { label: "Shipped", variant: "secondary" as const },
      processing: { label: "Processing", variant: "outline" as const },
      pending: { label: "Pending", variant: "destructive" as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const handleSaveProfile = () => {
    // TODO: Implement update endpoint
    setIsEditing(false);
  };

  const handleSignOut = async () => {
    try { localStorage.removeItem('user'); } catch {}
    window.location.href = '/auth/signin';
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-300">
      {/* Header */}
  <div className="border-b bg-gradient-to-r from-purple-200 via-white to-purple-300 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-200 to-purple-500 bg-clip-text text-transparent">My Account</h1>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignOut} className="border-purple-400 text-purple-700 hover:bg-purple-100">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4 mb-6">
                  <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{profile?.user?.name ?? ""}</h3>
                    <p className="text-sm text-muted-foreground">{profile?.user?.email ?? ""}</p>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Orders
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "addresses" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("addresses")}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Addresses
                  </Button>
                  <Button
                    variant={activeTab === "payment" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("payment")}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Profile Card */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Profile Information</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        {isEditing ? "Cancel" : "Edit"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Full Name</label>
                          <Input
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <Input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone</label>
                          <Input
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                          />
                        </div>
                        <Button onClick={handleSaveProfile}>
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                          <p className="font-medium">{profile?.user?.name ?? ""}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Email</label>
                          <p className="font-medium">{profile?.user?.email ?? ""}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                          <p className="font-medium">{profile?.user?.createdAt ? new Date(profile.user.createdAt).toLocaleDateString() : ""}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{orders.length}</h3>
                      <p className="text-sm text-muted-foreground">Total Orders</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">12</h3>
                      <p className="text-sm text-muted-foreground">Wishlist Items</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{profile?.addresses?.length ?? 0}</h3>
                      <p className="text-sm text-muted-foreground">Saved Addresses</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Orders</CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/orders">View All</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                              <Package className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="font-medium">{order.orderNumber}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.createdAt).toLocaleDateString()} • {order.items.length} items
                              </p>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="font-medium">${order.total.toFixed(2)}</p>
                            {getStatusBadge(order.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold">{order.orderNumber}</h3>
                            <p className="text-sm text-muted-foreground">Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{order.total.toFixed(2)}</p>
                            {getStatusBadge(order.status)}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-muted-foreground">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                          </div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/track-order?order=${order.id}`}>
                                Track Order
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                const billHtml = `<!DOCTYPE html>
                                  <html><head><title>Allora Mart Bill</title>
                                  <style>body{font-family:sans-serif;background:#f8f8ff;padding:2rem;}h1{font-size:1.5rem;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ddd;padding:8px;}th{background:#eee;}</style>
                                  </head><body>
                                  <h1>Allora Mart - Bill</h1>
                                  <p><strong>Order Number:</strong> ${order.orderNumber}</p>
                                  <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
                                  <h2>Items</h2>
                                  <table><thead><tr><th>Product</th><th>Qty</th><th>Price</th></tr></thead><tbody>
                                  ${order.items.map(item => `<tr><td>${item.id}</td><td>1</td><td>-</td></tr>`).join('')}
                                  </tbody></table>
                                  <h2>Summary</h2>
                                  <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                                  <p>Thank you for shopping with Allora Mart!</p>
                                  </body></html>`;
                                const blob = new Blob([billHtml], { type: 'text/html' });
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = `allora-mart-bill-${order.orderNumber}.html`;
                                document.body.appendChild(a);
                                a.click();
                                setTimeout(() => {
                                  document.body.removeChild(a);
                                  URL.revokeObjectURL(url);
                                }, 100);
                              }}
                            >Download Bill</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "addresses" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Saved Addresses</CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Address
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profile?.addresses?.map((address) => (
                      <Card key={address.id} className="relative">
                        <CardContent className="p-6">
                          {address.isDefault && (
                            <Badge className="absolute top-4 right-4">Default</Badge>
                          )}
                          
                          <div className="space-y-2">
                            <h3 className="font-semibold">{address.firstName} {address.lastName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {address.address1}
                              {address.address2 && <>, {address.address2}</>}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {address.city}{address.state ? `, ${address.state}` : ''} {address.postalCode}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {address.country}
                            </p>
                            {address.phone && (
                              <p className="text-sm text-muted-foreground">{address.phone}</p>
                            )}
                          </div>
                          
                          <div className="flex space-x-2 mt-4">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            {!address.isDefault && (
                              <Button variant="outline" size="sm">
                                Set as Default
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about your orders and account
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">SMS Notifications</h4>
                          <p className="text-sm text-muted-foreground">
                            Get text alerts for order updates
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications on your devices
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Password</h4>
                          <p className="text-sm text-muted-foreground">
                            Last changed 3 months ago
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Change</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Two-Factor Authentication</h4>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Privacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Data & Privacy</h4>
                          <p className="text-sm text-muted-foreground">
                            Manage your personal data and privacy settings
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing Preferences</h4>
                          <p className="text-sm text-muted-foreground">
                            Control how we contact you with marketing
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  XCircle,
  MapPin,
  User,
  Calendar,
  FileText,
  Search,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  product: {
    id: string;
    name: string;
    slug: string;
    images: string;
  };
}

interface Address {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface Order {
  id: string;
  orderNumber: string;
  status: "PENDING" | "CONFIRMED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED" | "REFUNDED";
  paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED" | "PARTIALLY_REFUNDED";
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
  createdAt: string;
  shippedAt?: string;
  deliveredAt?: string;
  items: OrderItem[];
  address: Address;
}

const statusConfig = {
  PENDING: { icon: Clock, label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  CONFIRMED: { icon: FileText, label: "Confirmed", color: "bg-blue-100 text-blue-800" },
  PROCESSING: { icon: Package, label: "Processing", color: "bg-purple-100 text-purple-800" },
  SHIPPED: { icon: Truck, label: "Shipped", color: "bg-indigo-100 text-indigo-800" },
  DELIVERED: { icon: CheckCircle, label: "Delivered", color: "bg-green-100 text-green-800" },
  CANCELLED: { icon: XCircle, label: "Cancelled", color: "bg-red-100 text-red-800" },
  REFUNDED: { icon: XCircle, label: "Refunded", color: "bg-gray-100 text-gray-800" },
};

const paymentStatusConfig = {
  PENDING: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  PAID: { label: "Paid", color: "bg-green-100 text-green-800" },
  FAILED: { label: "Failed", color: "bg-red-100 text-red-800" },
  REFUNDED: { label: "Refunded", color: "bg-gray-100 text-gray-800" },
  PARTIALLY_REFUNDED: { label: "Partially Refunded", color: "bg-orange-100 text-orange-800" },
};

export default function OrdersPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState<boolean | null>(null);
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const check = async () => {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (!res.ok) {
        setAuthed(false);
        router.push("/auth/signin?callbackUrl=/orders");
        return;
      }
      setAuthed(true);
      fetchOrders();
    };
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, statusFilter]);

  const fetchOrders = async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
      });

      if (statusFilter !== "all") {
        params.append("status", statusFilter);
      }

      const response = await fetch(`/api/orders?${params}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data.orders);
      setTotalPages(data.pagination.pages);
    } catch (error) {
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter((order) =>
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.items.some((item) =>
      item.product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getStatusIcon = (status: keyof typeof statusConfig) => {
    const Icon = statusConfig[status].icon;
    return <Icon className="h-4 w-4" />;
  };

  if (loading || authed === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/account">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Account
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">My Orders</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="CONFIRMED">Confirmed</SelectItem>
              <SelectItem value="PROCESSING">Processing</SelectItem>
              <SelectItem value="SHIPPED">Shipped</SelectItem>
              <SelectItem value="DELIVERED">Delivered</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
              <SelectItem value="REFUNDED">Refunded</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders list */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No orders found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || statusFilter !== "all"
                ? "No orders match your search criteria."
                : "You haven't placed any orders yet."}
            </p>
            {(!searchTerm && statusFilter === "all") && (
              <Button asChild>
                <Link href="/products">Start Shopping</Link>
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const statusInfo = statusConfig[order.status];
              const paymentStatusInfo = paymentStatusConfig[order.paymentStatus];
              
              return (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          Order #{order.orderNumber}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Placed on {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={statusInfo.color}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{statusInfo.label}</span>
                        </Badge>
                        <Badge className={paymentStatusInfo.color}>
                          {paymentStatusInfo.label}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Order items */}
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-muted rounded flex items-center justify-center flex-shrink-0">
                            <div className="text-2xl">📦</div>
                          </div>
                          <div className="flex-1">
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity} • ${item.price.toFixed(2)} each
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Shipping address */}
                        <div>
                          <h4 className="font-medium mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Shipping Address
                          </h4>
                          <div className="text-sm text-muted-foreground">
                            <p>
                              {order.address.firstName} {order.address.lastName}
                            </p>
                            {order.address.company && (
                              <p>{order.address.company}</p>
                            )}
                            <p>{order.address.address1}</p>
                            {order.address.address2 && (
                              <p>{order.address.address2}</p>
                            )}
                            <p>
                              {order.address.city}, {order.address.state}{" "}
                              {order.address.postalCode}
                            </p>
                            <p>{order.address.phone}</p>
                          </div>
                        </div>

                        {/* Order total */}
                        <div>
                          <h4 className="font-medium mb-2">Order Total</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Subtotal:</span>
                              <span>${order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Shipping:</span>
                              <span>${order.shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Tax:</span>
                              <span>${order.tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-medium pt-2 border-t">
                              <span>Total:</span>
                              <span>${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order actions */}
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        {order.status === "DELIVERED" && order.deliveredAt && (
                          <span>Delivered on {new Date(order.deliveredAt).toLocaleDateString()}</span>
                        )}
                        {order.status === "SHIPPED" && order.shippedAt && (
                          <span>Shipped on {new Date(order.shippedAt).toLocaleDateString()}</span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {order.status === "DELIVERED" && (
                          <Button variant="outline" size="sm">
                            Buy Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
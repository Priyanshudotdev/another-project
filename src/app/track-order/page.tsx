"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Package, 
  Truck, 
  MapPin, 
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { formatINR } from "@/lib/currency";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  // Mock order data - in a real app, this would come from an API
  const mockOrder = {
    orderNumber: "VBC-2024-1234",
    status: "shipped",
    estimatedDelivery: "2024-01-20",
    trackingNumber: "1Z9999W99999999999",
    carrier: "UPS",
    items: [
      { name: "Wireless Bluetooth Headphones", quantity: 1, price: 79.99 },
      { name: "Wireless Charging Pad", quantity: 1, price: 29.99 }
    ],
    total: 109.98,
    shippingAddress: {
      name: "John Doe",
      address1: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    timeline: [
      { 
        status: "ordered", 
        date: "2024-01-15", 
        time: "10:30 AM",
        description: "Order placed successfully",
        completed: true
      },
      { 
        status: "confirmed", 
        date: "2024-01-15", 
        time: "11:00 AM",
        description: "Order confirmed and processed",
        completed: true
      },
      { 
        status: "shipped", 
        date: "2024-01-16", 
        time: "2:00 PM",
        description: "Package shipped from warehouse",
        completed: true
      },
      { 
        status: "in-transit", 
        date: "2024-01-18", 
        time: "9:00 AM",
        description: "Package in transit to destination",
        completed: false
      },
      { 
        status: "delivered", 
        date: "2024-01-20", 
        time: "3:00 PM",
        description: "Package delivered to your address",
        completed: false
      }
    ]
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setOrderData(mockOrder);
      setIsSearching(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ordered":
      case "confirmed":
        return <Package className="h-5 w-5" />;
      case "shipped":
      case "in-transit":
        return <Truck className="h-5 w-5" />;
      case "delivered":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ordered":
        return "bg-blue-500";
      case "confirmed":
        return "bg-blue-600";
      case "shipped":
        return "bg-orange-500";
      case "in-transit":
        return "bg-yellow-500";
      case "delivered":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
            <p className="text-muted-foreground">
              Enter your order number and email to track your package
            </p>
          </div>

          {!orderData ? (
            <>
              {/* Search Form */}
              <Card>
              <CardContent className="p-8">
                <form onSubmit={handleTrackOrder} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="orderNumber" className="block text-sm font-medium mb-2">
                        Order Number
                      </label>
                      <Input
                        id="orderNumber"
                        type="text"
                        placeholder="e.g., VBC-2024-1234"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Tracking Order...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Track Order
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Where to find your order number?</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Your order number can be found in:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Order confirmation email</li>
                    <li>• Your account's order history</li>
                    <li>• Shipping confirmation email</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            </>
          ) : (
            <>
              {/* Order Tracking Results */}
              <div className="space-y-6">
                {/* Order Summary */}
                <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      <span>Order {orderData.orderNumber}</span>
                    </CardTitle>
                    <Badge className={`${getStatusColor(orderData.status)} text-white`}>
                      {orderData.status.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="font-semibold">{orderData.estimatedDelivery}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tracking Number</p>
                      <p className="font-semibold">{orderData.trackingNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Carrier</p>
                      <p className="font-semibold">{orderData.carrier}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderData.timeline.map((event: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          event.completed ? getStatusColor(event.status) : 'bg-muted'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="h-5 w-5 text-white" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{event.description}</h4>
                            {getStatusIcon(event.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {event.date} at {event.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Items */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {orderData.items.map((item: any, index: number) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold">{formatINR(item.price)}</p>
                        </div>
                      ))}
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>{formatINR(orderData.total)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Shipping Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="font-medium">{orderData.shippingAddress.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {orderData.shippingAddress.address1}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {orderData.shippingAddress.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Track with Carrier */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div>
                      <h3 className="font-semibold">Track with {orderData.carrier}</h3>
                      <p className="text-sm text-muted-foreground">
                        Get real-time updates from the carrier's website
                      </p>
                    </div>
                    <Button variant="outline">
                      Track on {orderData.carrier} Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
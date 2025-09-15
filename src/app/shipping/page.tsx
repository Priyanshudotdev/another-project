import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Package, 
  Clock, 
  MapPin,
  Shield,
  CheckCircle,
  ArrowLeft,
  Info,
  Globe,
  Calendar,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function ShippingPage() {
  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: "Free",
      deliveryTime: "5-7 business days",
      description: "Free shipping on orders over $50",
      features: ["Order tracking", "Insurance included", "Delivery confirmation"]
    },
    {
      id: "express",
      name: "Express Shipping",
      price: "$15.99",
      deliveryTime: "2-3 business days",
      description: "Faster delivery for urgent orders",
      features: ["Priority processing", "Real-time tracking", "Signature confirmation"]
    },
    {
      id: "overnight",
      name: "Overnight Shipping",
      price: "$29.99",
      deliveryTime: "1 business day",
      description: "Fastest delivery available",
      features: ["Same-day processing", "Guaranteed delivery", "White glove service"]
    }
  ];

  const internationalRates = [
    { region: "North America", price: "$12.99", time: "7-10 business days" },
    { region: "Europe", price: "$19.99", time: "10-14 business days" },
    { region: "Asia Pacific", price: "$24.99", time: "14-21 business days" },
    { region: "Other Regions", price: "$29.99", time: "21-28 business days" }
  ];

  const shippingRestrictions = [
    { category: "Hazardous Materials", description: "Flammable, explosive, or corrosive items" },
    { category: "Restricted Items", description: "Weapons, illegal substances, regulated materials" },
    { category: "Oversized Items", description: "Items exceeding 150 lbs or 72 inches in any dimension" },
    { category: "Perishable Goods", description: "Food items requiring refrigeration" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold">Shipping Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about shipping options, delivery times, and policies 
              for your Allora mart orders.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Domestic Shipping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Domestic Shipping</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingOptions.map((option) => (
              <Card key={option.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{option.name}</CardTitle>
                    {option.price === "Free" && (
                      <Badge className="bg-green-600">Free</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{option.price}</div>
                    <div className="text-sm text-muted-foreground">{option.deliveryTime}</div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    {option.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {option.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* International Shipping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">International Shipping</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Worldwide Delivery</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We ship to over 50 countries worldwide. International shipping rates and delivery 
                  times vary by destination.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {internationalRates.map((rate, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{rate.region}</h4>
                        <p className="text-sm text-muted-foreground">{rate.time}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{rate.price}</div>
                        <div className="text-xs text-muted-foreground">Starting from</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">International Shipping Notes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Customs fees and import duties may apply and are the responsibility of the recipient</li>
                    <li>• Delivery times may vary due to customs processing</li>
                    <li>• Some items may be restricted for international shipping</li>
                    <li>• Tracking is available for all international shipments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Order Processing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Order Processing</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Processing Time</h3>
                    <p className="text-muted-foreground">
                      Orders are typically processed within 1-2 business days before shipping. 
                      During peak seasons or holidays, processing may take an additional 1-2 days.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cut-off Times</h3>
                    <p className="text-muted-foreground">
                      Orders placed before 2:00 PM EST are typically processed the same business day. 
                      Orders placed after 2:00 PM EST are processed the next business day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Days</h3>
                    <p className="text-muted-foreground">
                      Business days are Monday through Friday, excluding holidays. Delivery times 
                      are calculated in business days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Package Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Package Tracking</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Stay informed about your order's progress with our comprehensive tracking system.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Tracking Updates</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        Order confirmation email with tracking number
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        Real-time tracking updates via email or SMS
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        Delivery confirmation with signature
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">How to Track</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Check your email for the shipping confirmation</li>
                      <li>2. Find your tracking number in the email</li>
                      <li>3. Enter the tracking number on our website</li>
                      <li>4. View real-time updates on your package location</li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Track Your Order</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Enter your order number and email to track your package:
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/track-order">Track Order</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shipping Restrictions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shipping Restrictions</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Restricted Items</h3>
                    <p className="text-muted-foreground">
                      We cannot ship certain items due to legal, safety, or logistical reasons:
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {shippingRestrictions.map((restriction, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-1">{restriction.category}</h4>
                      <p className="text-xs text-muted-foreground">{restriction.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Additional Restrictions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• P.O. Boxes: Some shipping carriers cannot deliver to P.O. boxes</li>
                    <li>• APO/FPO Addresses: Military addresses may have longer delivery times</li>
                    <li>• Remote Areas: Additional charges may apply for remote locations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Delivery Issues</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  If you experience any issues with your delivery, we're here to help resolve them quickly.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Package className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Lost Packages</h4>
                    <p className="text-sm text-muted-foreground">
                      If your package is marked as delivered but you haven't received it, contact us within 48 hours.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Truck className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Damaged Items</h4>
                    <p className="text-sm text-muted-foreground">
                      Inspect your package upon delivery. Report any damage immediately with photos.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Wrong Address</h4>
                    <p className="text-sm text-muted-foreground">
                      If your package was delivered to the wrong address, contact us immediately for assistance.
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">What to Do:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Check your tracking information first</li>
                    <li>2. Contact your local post office or carrier</li>
                    <li>3. Reach out to our customer support team</li>
                    <li>4. Provide your order number and tracking information</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Shipping Support</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our customer support team is available 24/7 to help with any shipping questions or concerns.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Email Support</h4>
                    <p className="text-sm text-muted-foreground">shipping@alloramart.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Phone Support</h4>
                    <p className="text-sm text-muted-foreground">1-800-SHOP-NOW</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>Contact Support</Button>
                  <Button variant="outline">Track Order</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
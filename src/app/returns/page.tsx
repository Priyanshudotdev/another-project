import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  RotateCcw, 
  Package, 
  Calendar, 
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowLeft,
  Truck,
  IndianRupee,
  Shield
} from "lucide-react";
import Link from "next/link";

const returnPolicy = {
  timeframe: "30 days",
  eligibility: [
    "Items must be in original condition",
    "Original tags and packaging must be intact",
    "Items must not have been used or damaged",
    "Original receipt or proof of purchase required"
  ],
  nonReturnable: [
    "Perishable items (food, flowers, plants)",
    "Personal care items (opened or used)",
    "Custom or personalized products",
    "Digital downloads and software",
    "Items marked as final sale",
    "Undergarments and swimwear (for hygiene reasons)"
  ]
};

const returnProcess = [
  {
    step: "1",
    title: "Initiate Return",
    description: "Log into your account and select the item you want to return",
    timeframe: "Anytime within 30 days",
    icon: Package
  },
  {
    step: "2",
    title: "Print Return Label",
    description: "We'll provide a free return shipping label for you to print",
    timeframe: "Instant",
    icon: Truck
  },
  {
    step: "3",
    title: "Package and Ship",
    description: "Pack the item securely and drop it off at any shipping location",
    timeframe: "3-5 business days",
    icon: Package
  },
  {
    step: "4",
    title: "Processing",
    description: "Once we receive your return, we'll inspect and process it",
    timeframe: "2-3 business days",
    icon: Clock
  },
  {
    step: "5",
    title: "Refund or Exchange",
    description: "Receive your refund or exchange as requested",
    timeframe: "5-10 business days",
    icon: IndianRupee
  }
];

const refundOptions = [
  {
    type: "Refund to Original Payment",
    description: "Refund issued to your original payment method",
    timeframe: "5-10 business days after processing",
    icon: IndianRupee
  },
  {
    type: "Store Credit",
    description: "Receive store credit for future purchases",
    timeframe: "Immediate after processing",
    icon: Shield
  },
  {
    type: "Exchange",
    description: "Exchange for a different size, color, or item",
    timeframe: "5-10 business days after processing",
    icon: RotateCcw
  }
];

export default function ReturnsPage() {
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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Returns & Exchanges
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Easy returns and exchanges with our 30-day satisfaction guarantee.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Policy Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <RotateCcw className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">30-Day Return Policy</h2>
            <p className="text-muted-foreground mb-4">
              We want you to love your purchase! If you're not completely satisfied, 
              you can return most items within 30 days of delivery.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">30</div>
                <div className="text-sm text-muted-foreground">Days to Return</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Return Shipping</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Easy</div>
                <div className="text-sm text-muted-foreground">Online Process</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Return Eligibility */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Return Eligibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>What Can Be Returned</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {returnPolicy.eligibility.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Good news!</strong> Most items are eligible for return if they meet these conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span>Non-Returnable Items</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {returnPolicy.nonReturnable.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Please note:</strong> Some items cannot be returned for hygiene, safety, or legal reasons.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Return Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Return an Item</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {returnProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-4 space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-6 h-6 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{step.timeframe}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Refund Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Refund Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {refundOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">{option.type}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{option.timeframe}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Return Instructions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Return Instructions</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Step-by-Step Guide</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Sign In to Your Account</h4>
                        <p className="text-sm text-muted-foreground">
                          Go to "My Orders" and select the order containing the item you want to return.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Select Return Reason</h4>
                        <p className="text-sm text-muted-foreground">
                          Choose why you're returning the item and select your preferred refund method.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Print Return Label</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll generate a free return shipping label for you to print.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Package and Ship</h4>
                        <p className="text-sm text-muted-foreground">
                          Pack the item securely and drop it off at any authorized shipping location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Packaging Tips</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Package className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Use original packaging when possible</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Include all accessories and documentation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Remove any personal information</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Secure package with tape to prevent damage</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our customer support team is available to help you with your return:
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm"><strong>Email:</strong> support@alloramart.com</p>
                      <p className="text-sm"><strong>Phone:</strong> 1-800-VIBECART</p>
                      <p className="text-sm"><strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exchange Policy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Exchange Policy</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Exchange Options</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Size/Color Exchange</h4>
                      <p className="text-sm text-muted-foreground">
                        Exchange for a different size or color of the same item. Subject to availability.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Different Item</h4>
                      <p className="text-sm text-muted-foreground">
                        Exchange for a different item of equal or lesser value. Pay difference for higher-priced items.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Store Credit</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive store credit to use for future purchases. No expiration date.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Exchange Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Follow the same return process as above</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Select "Exchange" as your refund method</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Choose your preferred exchange option</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">We'll ship your new item once we receive the return</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Fast exchanges:</strong> Most exchanges are processed within 2-3 business days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Cases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Special Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Damaged Items</h3>
                <p className="text-sm text-muted-foreground">
                  If you receive a damaged item, contact us immediately. We'll arrange for a replacement 
                  or refund at no additional cost.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Wrong Item</h3>
                <p className="text-sm text-muted-foreground">
                  If you receive the wrong item, we'll send the correct one immediately and provide 
                  a return label for the incorrect item.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Late Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Returns after 30 days may be accepted on a case-by-case basis. Contact customer 
                  support for assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">How long does it take to process a return?</h3>
                <p className="text-sm text-muted-foreground">
                  Once we receive your return, it takes 2-3 business days to process. Refunds 
                  take an additional 5-10 business days to appear in your account.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Who pays for return shipping?</h3>
                <p className="text-sm text-muted-foreground">
                  We provide free return shipping for all eligible returns within the 30-day return window.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Can I return items bought on sale?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, sale items can be returned within 30 days, unless marked as "final sale."
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What if I lost my return label?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact customer support and we'll resend your return label. Have your order 
                  number ready for verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Need Help with a Return?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our customer support team is here to help make your return process as smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/account">
                  View Order History
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
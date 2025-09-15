import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  HelpCircle, 
  Truck, 
  RotateCcw, 
  Shield, 
  CreditCard,
  Package,
  User,
  MapPin
} from "lucide-react";

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Orders & Shipping",
      icon: Truck,
      items: [
        "Track your order",
        "Shipping information",
        "Delivery times",
        "International shipping",
        "Order changes"
      ]
    },
    {
      title: "Returns & Refunds",
      icon: RotateCcw,
      items: [
        "Return policy",
        "How to return an item",
        "Refund process",
        "Exchange items",
        "Return shipping"
      ]
    },
    {
      title: "Account & Security",
      icon: Shield,
      items: [
        "Account settings",
        "Password reset",
        "Two-factor authentication",
        "Privacy settings",
        "Data protection"
      ]
    },
    {
      title: "Payment Methods",
      icon: CreditCard,
      items: [
        "Accepted payment methods",
        "Payment security",
        "Billing issues",
        "Gift cards",
        "Payment plans"
      ]
    },
    {
      title: "Products & Services",
      icon: Package,
      items: [
        "Product information",
        "Warranty information",
        "Product guides",
        "Size guides",
        "Care instructions"
      ]
    },
    {
      title: "Account Management",
      icon: User,
      items: [
        "Profile settings",
        "Address book",
        "Wishlist management",
        "Order history",
        "Personal information"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number sent to your email or by visiting your account page."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and select buy-now-pay-later services."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team 24/7 via live chat, email at support@vibecart.com, or phone at 1-800-VIBECART."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and get the support you need
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Track Order</h3>
                <p className="text-sm text-muted-foreground">
                  Check the status of your recent orders
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Return Item</h3>
                <p className="text-sm text-muted-foreground">
                  Start a return or exchange
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Account Help</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Payment Issues</h3>
                <p className="text-sm text-muted-foreground">
                  Get help with payment problems
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href="#" 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@vibecart.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Email Support
              </a>
              <a 
                href="tel:180084232278" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Call 1-800-VIBECART
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
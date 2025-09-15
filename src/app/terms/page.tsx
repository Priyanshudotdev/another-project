import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, ShoppingBag, CreditCard, AlertCircle, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These terms and conditions govern your use of Allora mart's website and services. By using our
              services, you agree to these terms.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Last Updated */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Last Updated: January 15, 2024</span>
              </div>
              <Button variant="outline" size="sm">Download PDF</Button>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Welcome to Allora mart! These Terms of Service ("Terms") govern your use of our website, mobile
            applications, and services (collectively, the "Services"). By accessing or using our Services,
            you agree to be bound by these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you do not agree to these Terms, you may not access or use our Services. We reserve the right
            to update these Terms at any time, and we will provide notice of material changes as required by law.
          </p>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  By using Allora mart's Services, you represent and warrant that:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• You are at least 18 years of age or have parental consent</li>
                  <li>• You have the legal capacity to enter into a binding agreement</li>
                  <li>• You will comply with all applicable laws and regulations</li>
                  <li>• You will not use our Services for any illegal or unauthorized purpose</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Account Registration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Account Registration</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Account Responsibilities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  To access certain features of our Services, you must register for an account. You agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide accurate, current, and complete information</li>
                  <li>• Maintain and update your account information promptly</li>
                  <li>• Keep your password secure and confidential</li>
                  <li>• Be responsible for all activities under your account</li>
                  <li>• Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Account Termination</h4>
                    <p className="text-sm text-muted-foreground">
                      We reserve the right to suspend or terminate your account for violations of these Terms
                      or suspicious activity.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Products and Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Products and Services</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <span>Product Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We strive to provide accurate product information, but we do not warrant that product
                  descriptions, prices, or other content is accurate, complete, or current.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium">Pricing and Availability</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Prices are subject to change without notice</li>
                    <li>• We reserve the right to limit quantities available for purchase</li>
                    <li>• Products may be unavailable or out of stock</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Order Acceptance</h4>
                  <p className="text-sm text-muted-foreground">
                    Your receipt of an order confirmation does not constitute our acceptance of your order.
                    We reserve the right to refuse or cancel any order for any reason.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Payments and Billing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Payments and Billing</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <span>Payment Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Payment Methods</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept various payment methods including credit cards, debit cards, PayPal, and other
                    payment processors. All payments are processed securely through third-party payment providers.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Billing and Charges</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• You authorize us to charge your selected payment method</li>
                    <li>• You are responsible for all taxes and fees associated with your purchases</li>
                    <li>• We may place temporary holds on your payment method for verification</li>
                    <li>• Refunds will be issued to the original payment method</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    If a payment fails, we may suspend your account or cancel your order. You are responsible
                    for any fees associated with failed payments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shipping and Delivery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We offer various shipping options for your convenience. Shipping times and costs vary
                  depending on your location and selected shipping method.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Processing Time</h4>
                    <p className="text-sm text-muted-foreground">
                      Orders are typically processed within 1-2 business days before shipping.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Delivery Estimates</h4>
                    <p className="text-sm text-muted-foreground">
                      Delivery times are estimates and not guaranteed. Factors beyond our control may affect delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Risk of Loss</h4>
                    <p className="text-sm text-muted-foreground">
                      Risk of loss and title for products pass to you upon delivery to the shipping carrier.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Returns and Refunds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We want you to be completely satisfied with your purchase. If you're not happy with your
                  order, you may be eligible for a return or refund.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium">Return Policy</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Items must be returned within 30 days of delivery</li>
                    <li>• Products must be in original condition with tags attached</li>
                    <li>• Original packaging and accessories must be included</li>
                    <li>• Some items may have different return policies (e.g., electronics, perishables)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Refund Process</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Refunds are processed within 5-7 business days after we receive returned items</li>
                    <li>• Refunds will be issued to the original payment method</li>
                    <li>• Shipping costs are non-refundable unless the return is due to our error</li>
                    <li>• We may deduct restocking fees for certain returns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Our Rights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  All content, features, and functionality on Allora mart are owned by Allora mart and are
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium">What You Can't Do</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Copy, modify, or distribute our content without permission</li>
                    <li>• Use our trademarks or logos without authorization</li>
                    <li>• Scrape or harvest data from our website</li>
                    <li>• Reverse engineer or decompile our software</li>
                    <li>• Use our Services to create competing products</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Disclaimer</h4>
                    <p className="text-sm text-muted-foreground">
                      Our Services are provided "as is" and "as available" without warranties of any kind,
                      either express or implied.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Limitation of Damages</h4>
                  <p className="text-sm text-muted-foreground">
                    To the maximum extent permitted by law, Allora mart shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages arising from your use of our Services.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Maximum Liability</h4>
                  <p className="text-sm text-muted-foreground">
                    Our total liability for any claims related to our Services shall not exceed the amount
                    you paid for the Services in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                These Terms of Service and your use of Allora mart's Services shall be governed by and
                construed in accordance with the laws of the State of Delaware, without regard to its
                conflict of law principles.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising from these Terms shall be resolved in the state or federal courts
                located in Delaware, and you consent to the exclusive jurisdiction of such courts.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="font-medium">Email: legal@alloramart.com</p>
                <p className="font-medium">Phone: +1 (555) 123-4567</p>
                <p className="font-medium">Mail: Legal Department, 123 Commerce St, Shopping City, SC 12345</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
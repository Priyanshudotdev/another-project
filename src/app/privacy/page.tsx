import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  Database, 
  Cookie,
  Lock,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
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
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Welcome to Allora mart! We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit 
            our website or use our services, and tell you about your privacy rights and how the law protects you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This policy is effective as of January 15, 2024. We may update this policy from time to time, 
            and we encourage you to review this policy periodically for any changes.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Name and contact information (email, phone number, mailing address)</li>
                  <li>• Account information (username, password, security questions)</li>
                  <li>• Payment information (credit card details, billing address)</li>
                  <li>• Shipping information (delivery address, contact preferences)</li>
                  <li>• Demographic information (age, gender, preferences)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Automatically Collected Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IP address and browser information</li>
                  <li>• Device information (type, operating system, browser version)</li>
                  <li>• Usage data (pages visited, time spent, links clicked)</li>
                  <li>• Location data (country, region, city)</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">To Provide Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Process orders, manage accounts, and provide customer support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">To Improve Our Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyze usage patterns and gather feedback to enhance user experience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">For Marketing</h3>
                    <p className="text-sm text-muted-foreground">
                      Send promotional offers and personalized recommendations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">For Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Prevent fraud and protect our platform from unauthorized access
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">We Do Not Sell Your Personal Information</h3>
                    <p className="text-sm text-muted-foreground">
                      We never sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">We may share information only with:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Service providers who help us operate our business (payment processors, shipping carriers)</li>
                    <li>• Law enforcement when required by law or to protect our rights</li>
                    <li>• Business partners with your explicit consent</li>
                    <li>• In connection with a merger, acquisition, or sale of company assets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Lock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">We Protect Your Data</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure storage of sensitive information</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Employee training on data protection</li>
                    <li>• Limited access to personal data on a need-to-know basis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cookie className="h-5 w-5 text-primary" />
                <span>How We Use Cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Essential Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Required for basic website functionality
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Analytics Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Help us understand how you use our site
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Marketing Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Used for personalized advertising
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Preference Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Remember your settings and preferences
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Access and Portability</h3>
                <p className="text-sm text-muted-foreground">
                  Request copies of your personal data and transfer it to another service
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Correction and Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  Update or delete inaccurate or outdated personal information
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Opt-Out of Marketing</h3>
                <p className="text-sm text-muted-foreground">
                  Unsubscribe from marketing communications at any time
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Complaints</h3>
                <p className="text-sm text-muted-foreground">
                  File complaints with data protection authorities if needed
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal data, 
                please contact our Data Protection Officer:
              </p>
              
              <div className="space-y-2">
                <p className="font-medium">Email: privacy@alloramart.com</p>
                <p className="font-medium">Phone: +1 (555) 123-4567</p>
                <p className="font-medium">Mail: Privacy Officer, 123 Commerce St, Shopping City, SC 12345</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
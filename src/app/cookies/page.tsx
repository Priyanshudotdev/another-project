import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cookie, 
  Shield, 
  Eye, 
  Settings,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Info
} from "lucide-react";
import Link from "next/link";

export default function CookiesPage() {
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
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about how VibeCart uses cookies and similar technologies to enhance your 
              browsing experience and provide personalized services.
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
          <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when 
                  you visit a website. They are widely used to make websites work more efficiently and 
                  provide a better browsing experience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">How Cookies Work</h3>
                    <p className="text-sm text-muted-foreground">
                      When you visit our website, we send cookies to your device which store information 
                      about your preferences and interactions. This helps us remember you and provide 
                      a more personalized experience on subsequent visits.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Why We Use Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      We use cookies to enhance your experience, analyze site traffic, personalize content, 
                      and provide targeted advertisements. Cookies help us understand how you use our 
                      website and improve our services accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types of Cookies We Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Essential Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually only set in response to actions made by you which amount to a request 
                    for services.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• User authentication and session management</li>
                      <li>• Shopping cart functionality</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Load balancing and server management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span>Analytics Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    These cookies allow us to count visits and traffic sources so we can measure and 
                    improve the performance of our site. They help us understand which pages are the 
                    most and least popular and see how visitors move around the site.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What we collect:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pages visited and time spent on each page</li>
                      <li>• Browser type and version</li>
                      <li>• Device type and operating system</li>
                      <li>• Geographic location (country, region)</li>
                      <li>• Referring websites and search terms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <span>Functional Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    These cookies enable the website to provide enhanced functionality and personalization. 
                    They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Language preferences</li>
                      <li>• Remembering user preferences (e.g., font size, theme)</li>
                      <li>• Personalized content recommendations</li>
                      <li>• Shopping cart and wishlist persistence</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <span>Advertising Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    These cookies are used to make advertising messages more relevant to you and your interests. 
                    They are also used to limit the number of times you see an advertisement and help measure 
                    the effectiveness of advertising campaigns.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">How they work:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Track your browsing habits across websites</li>
                      <li>• Build a profile of your interests</li>
                      <li>• Show relevant advertisements based on your profile</li>
                      <li>• Measure ad campaign performance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We work with third-party service providers who may set cookies on your device when you 
                  visit our website. These providers help us with analytics, advertising, and other services.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Analytics Partners</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Hotjar</li>
                      <li>• Mixpanel</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Advertising Partners</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Ads</li>
                      <li>• Facebook Pixel</li>
                      <li>• Twitter Pixel</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Control</h4>
                    <p className="text-sm text-muted-foreground">
                      While we cannot control third-party cookies directly, you can manage your preferences 
                      through our cookie consent tool or by visiting the third-party websites directly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookie Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  You have control over the cookies used on our website. You can manage your preferences 
                  through the following methods:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Settings className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Cookie Consent Tool</h4>
                      <p className="text-sm text-muted-foreground">
                        When you first visit our website, you'll see a cookie banner that allows you to customize 
                        your cookie preferences. You can change these settings at any time by clicking the 
                        cookie preferences link in the footer of our website.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Browser Settings</h4>
                      <p className="text-sm text-muted-foreground">
                        Most web browsers allow you to control cookies through their settings. You can usually 
                        block cookies, delete existing cookies, or receive notifications when new cookies are set.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Do Not Track</h4>
                      <p className="text-sm text-muted-foreground">
                        Some browsers offer a "Do Not Track" feature that signals your preference not to be 
                        tracked. While we respect this signal, it may not be honored by all third-party services.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Browser-Specific Instructions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium">Chrome</h5>
                      <p className="text-muted-foreground">
                        Settings → Privacy and security → Cookies and other site data
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium">Firefox</h5>
                      <p className="text-muted-foreground">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium">Safari</h5>
                      <p className="text-muted-foreground">
                        Preferences → Privacy → Cookies and website data
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium">Edge</h5>
                      <p className="text-muted-foreground">
                        Settings → Privacy, search, and services → Cookies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impact of Disabling Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">What Happens If You Disable Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      While you can choose to disable cookies, this may affect your experience on our website. 
                      Some features may not work as intended, and you may not be able to access certain services.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-red-600">Limited Functionality</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Shopping cart may not work properly</li>
                      <li>• User authentication may fail</li>
                      <li>• Personalized features may be disabled</li>
                      <li>• Some interactive elements may not function</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-orange-600">Reduced Experience</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Content may not be personalized</li>
                      <li>• You may see repetitive advertisements</li>
                      <li>• Site performance may be slower</li>
                      <li>• Some pages may not display correctly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Updates to This Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, 
                  technology, or legal requirements. When we make changes, we will update the "Last Updated" 
                  date at the top of this policy.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">How We Notify You</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Displaying a notice on our homepage</li>
                    <li>• Sending you an email notification for material changes</li>
                    <li>• Showing a cookie consent banner with updated preferences</li>
                  </ul>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  We encourage you to review this policy periodically to stay informed about how we use 
                  cookies and how you can manage your preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Cookie Policy or how we use cookies, please contact us:
              </p>
              
              <div className="space-y-2">
                <p className="font-medium">Email: privacy@vibecart.com</p>
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UniversalAccess, 
  Keyboard, 
  Eye, 
  Volume2,
  Smartphone,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Info,
  Settings
} from "lucide-react";
import Link from "next/link";

export default function AccessibilityPage() {
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
            <h1 className="text-4xl font-bold">Accessibility Statement</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              VibeCart is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply the relevant 
              accessibility standards.
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
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At VibeCart, we believe that everyone should have equal access to our products and services, 
                  regardless of their abilities. We are committed to making our website and mobile applications 
                  accessible to all users, including those with visual, auditory, motor, or cognitive disabilities.
                </p>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Our Goal</h4>
                    <p className="text-sm text-muted-foreground">
                      To provide an inclusive digital experience that allows all users to browse, shop, 
                      and interact with our platform independently and with dignity.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Compliance Standards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Compliance Standards</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Web Content Accessibility Guidelines (WCAG) 2.1</h3>
                  <p className="text-muted-foreground">
                    We aim to comply with Level AA of the WCAG 2.1 guidelines, which are the most widely 
                    recognized standards for web accessibility. These guidelines cover four main principles:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Perceivable</h4>
                    <p className="text-sm text-muted-foreground">
                      Information and user interface components must be presentable to users in ways they can perceive.
                    </p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Alternative text for images</li>
                      <li>• Captions for videos</li>
                      <li>• High contrast colors</li>
                      <li>• Resizable text</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Operable</h4>
                    <p className="text-sm text-muted-foreground">
                      User interface components and navigation must be operable by all users.
                    </p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Keyboard navigation</li>
                      <li>• Sufficient time limits</li>
                      <li>• No flashing content</li>
                      <li>• Clear navigation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Understandable</h4>
                    <p className="text-sm text-muted-foreground">
                      Information and the operation of user interface must be understandable.
                    </p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Readable text</li>
                      <li>• Predictable navigation</li>
                      <li>• Input assistance</li>
                      <li>• Error prevention</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Robust</h4>
                    <p className="text-sm text-muted-foreground">
                      Content must be robust enough that it can be interpreted reliably by a wide variety of user agents.
                    </p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Compatible with assistive technologies</li>
                      <li>• Valid HTML code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Accessibility Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Keyboard className="h-5 w-5 text-primary" />
                  <span>Keyboard Navigation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Our website can be fully navigated using only a keyboard, allowing users who cannot use a mouse 
                    to access all features and content.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Keyboard Shortcuts:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tab: Navigate to next interactive element</li>
                      <li>• Shift + Tab: Navigate to previous interactive element</li>
                      <li>• Enter/Space: Activate buttons and links</li>
                      <li>• Escape: Close modals and dropdowns</li>
                      <li>• Arrow Keys: Navigate within menus and lists</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <span>Visual Accessibility</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    We've implemented various features to make our website accessible to users with visual impairments.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Visual Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• High contrast color scheme</li>
                      <li>• Resizable text without loss of functionality</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Volume2 className="h-5 w-5 text-primary" />
                  <span>Screen Reader Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Our website is compatible with popular screen readers, ensuring that users with visual impairments 
                    can access all content and functionality.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Screen Reader Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Proper ARIA labels and roles</li>
                      <li>• Logical reading order</li>
                      <li>• Descriptive link text</li>
                      <li>• Form field labels and instructions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>Mobile Accessibility</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Our mobile applications and responsive website design ensure accessibility across all devices.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Mobile Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Touch-friendly interface</li>
                      <li>• Responsive design for all screen sizes</li>
                      <li>• Device-specific accessibility features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ongoing Efforts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ongoing Accessibility Efforts</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Accessibility is an ongoing commitment at VibeCart. We continuously work to improve 
                  the accessibility of our digital products through:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Regular Testing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Automated accessibility scans</li>
                      <li>• Manual testing with assistive technologies</li>
                      <li>• User testing with people with disabilities</li>
                      <li>• Regular accessibility audits</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Training and Awareness</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Accessibility training for developers</li>
                      <li>• Design guidelines for accessibility</li>
                      <li>• Content creation best practices</li>
                      <li>• Regular accessibility updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Known Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Areas for Improvement</h4>
                    <p className="text-sm text-muted-foreground">
                      While we strive for full accessibility, we acknowledge that some areas may need improvement:
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Third-Party Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Some third-party services integrated into our website may have limited accessibility. 
                      We work with our partners to improve their accessibility standards.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Legacy Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Older content or features may not meet current accessibility standards. We prioritize 
                      updating these areas based on user feedback and usage.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feedback and Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Feedback and Support</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We welcome feedback on the accessibility of our website. If you encounter any accessibility 
                  barriers or have suggestions for improvement, please let us know.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">How to Report Issues</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Email: accessibility@vibecart.com</li>
                    <li>• Phone: +1 (555) 123-4567</li>
                    <li>• Use our accessibility feedback form</li>
                    <li>• Contact our customer support team</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">What to Include in Your Report</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• The URL of the page where you encountered the issue</li>
                    <li>• A description of the accessibility barrier</li>
                    <li>• The assistive technology you were using (if applicable)</li>
                    <li>• Your browser and device information</li>
                    <li>• Steps to reproduce the issue</li>
                  </ul>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Our Response</h4>
                    <p className="text-sm text-muted-foreground">
                      We will acknowledge your report within 2 business days and provide a timeline for 
                      addressing the issue. We prioritize accessibility issues based on severity and impact.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Future Commitments */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Future Commitments</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We are committed to continuously improving accessibility and have set the following goals:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Short-term Goals (6 months)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Achieve WCAG 2.1 AA compliance</li>
                      <li>• Conduct comprehensive accessibility audit</li>
                      <li>• Implement keyboard navigation improvements</li>
                      <li>• Enhance screen reader compatibility</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Long-term Goals (1-2 years)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Achieve WCAG 2.1 AAA compliance where possible</li>
                      <li>• Implement advanced accessibility features</li>
                      <li>• Establish accessibility testing protocols</li>
                      <li>• Create accessibility certification program</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Accessibility Statement or need assistance with 
                accessing our website, please contact our Accessibility Coordinator:
              </p>
              
              <div className="space-y-2">
                <p className="font-medium">Email: accessibility@vibecart.com</p>
                <p className="font-medium">Phone: +1 (555) 123-4567</p>
                <p className="font-medium">Mail: Accessibility Coordinator, 123 Commerce St, Shopping City, SC 12345</p>
              </div>
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  We are committed to providing accessible communication methods. If you require 
                  alternative formats or accommodations, please let us know.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
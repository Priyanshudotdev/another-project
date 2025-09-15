"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Gift,
  Star,
  Award,
  ArrowLeft,
  BarChart3,
  Link as LinkIcon,
  Share2,
  Target,
  Shield,
  Clock,
  CheckCircle,
  Calculator
} from "lucide-react";
import Link from "next/link";

export default function AffiliatesPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your interest! We'll contact you soon with next steps.");
      setEmail("");
    }, 1500);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Commissions",
      description: "Earn up to 15% commission on every sale you refer"
    },
    {
      icon: Gift,
      title: "Generous Bonuses",
      description: "Performance bonuses and incentives for top affiliates"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Track your clicks, conversions, and earnings in real-time"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal affiliate manager and marketing resources"
    }
  ];

  const commissionTiers = [
    {
      tier: "Bronze",
      sales: "$0 - $5,000",
      rate: "5%",
      color: "bg-orange-100 text-orange-800"
    },
    {
      tier: "Silver",
      sales: "$5,001 - $15,000",
      rate: "8%",
      color: "bg-gray-100 text-gray-800"
    },
    {
      tier: "Gold",
      sales: "$15,001 - $50,000",
      rate: "12%",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      tier: "Platinum",
      sales: "$50,001+",
      rate: "15%",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const marketingTools = [
    {
  icon: LinkIcon,
      title: "Affiliate Links",
      description: "Generate unique tracking links for any product or page"
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description: "Pre-approved posts and images for social sharing"
    },
    {
      icon: BarChart3,
      title: "Performance Dashboard",
      description: "Detailed analytics and reporting tools"
    },
    {
      icon: Target,
      title: "Landing Pages",
      description: "Custom landing pages optimized for conversions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      earnings: "$12,500/month",
      comment: "VibeCart's affiliate program has transformed my blog into a thriving business. The commissions are generous and the support is amazing!",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      earnings: "$8,200/month",
      comment: "As a tech reviewer, I love promoting VibeCart products. The quality is excellent and my audience trusts my recommendations.",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Lifestyle Influencer",
      earnings: "$15,800/month",
      comment: "The real-time analytics help me optimize my content strategy. VibeCart is my top-performing affiliate partner!",
      avatar: "/placeholder-avatar.jpg"
    }
  ];

  const faqs = [
    {
      question: "How do I join the affiliate program?",
      answer: "Simply fill out the application form above. We'll review your application and get back to you within 3-5 business days."
    },
    {
      question: "How and when do I get paid?",
      answer: "We pay commissions monthly via PayPal or bank transfer. Payments are processed within 30 days after the end of each month."
    },
    {
      question: "What products can I promote?",
      answer: "You can promote any product available on VibeCart. We offer a wide range of products across multiple categories."
    },
    {
      question: "How long do cookies last?",
      answer: "Our affiliate cookies last for 30 days, meaning you'll earn commission on any purchase made within 30 days of clicking your link."
    },
    {
      question: "Can I use paid advertising to promote VibeCart?",
      answer: "Yes, paid advertising is allowed, but we have some restrictions on trademark bidding. Please review our terms for details."
    }
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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Affiliate Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with VibeCart and earn generous commissions by promoting products you love. 
              Join thousands of successful affiliates today!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6 space-y-3">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Affiliates</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6 space-y-3">
              <DollarSign className="h-8 w-8 text-primary mx-auto" />
              <div className="text-2xl font-bold">15%</div>
              <div className="text-sm text-muted-foreground">Max Commission</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6 space-y-3">
              <TrendingUp className="h-8 w-8 text-primary mx-auto" />
              <div className="text-2xl font-bold">$2M+</div>
              <div className="text-sm text-muted-foreground">Paid in Commissions</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6 space-y-3">
              <Star className="h-8 w-8 text-primary mx-auto" />
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-muted-foreground">Affiliate Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Join Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Commission Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Commission Structure</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {commissionTiers.map((tier, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${tier.color}`}>
                      {tier.tier}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{tier.rate}</div>
                    <div className="text-sm text-muted-foreground">{tier.sales}</div>
                    {index === 3 && (
                      <Badge className="mt-2">Most Popular</Badge>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  <Calculator className="h-4 w-4 inline mr-1" />
                  Calculate your potential earnings with our commission calculator
                </p>
                <Button variant="outline">
                  Open Calculator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Marketing Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Marketing Tools & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">{testimonial.earnings}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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

        {/* Application Form */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Join our affiliate program today and start earning commissions by promoting products you love.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
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

              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">
                  I agree to the affiliate terms and conditions
                </span>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Apply Now
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Have questions? <Link href="/contact" className="text-primary hover:underline">Contact our affiliate team</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
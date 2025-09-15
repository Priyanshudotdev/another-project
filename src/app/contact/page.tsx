"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Building,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: [
        { label: "General Inquiries", value: "support@vibecart.com" },
        { label: "Business Partnerships", value: "partners@vibecart.com" },
        { label: "Press & Media", value: "press@vibecart.com" }
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        { label: "Customer Support", value: "1-800-VIBECART" },
        { label: "Business Hours", value: "Mon-Fri 9AM-6PM EST" },
        { label: "Emergency Support", value: "24/7 Available" }
      ]
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        { label: "Headquarters", value: "123 Commerce Street, Shopping City, SC 12345" },
        { label: "Showroom", value: "456 Retail Avenue, Mall District, SC 12346" },
        { label: "Warehouse", value: "789 Industrial Park, Logistics Zone, SC 12347" }
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
        { label: "Saturday", value: "10:00 AM - 4:00 PM" },
        { label: "Sunday", value: "Closed" }
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, our phone support is available 24/7."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number provided in your shipping confirmation email or through your account dashboard."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and various buy-now-pay-later options."
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Get in touch with our team for any questions, concerns, or feedback.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <p className="text-xs text-muted-foreground">{detail.label}</p>
                          <p className="text-sm font-medium">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                      />
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ and Quick Links */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/track-order">
                      <MapPin className="h-4 w-4 mr-2" />
                      Track Your Order
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/help">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Help Center
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/account">
                      <Users className="h-4 w-4 mr-2" />
                      My Account
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/returns">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Returns & Exchanges
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-sm">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/help">
                      View all FAQs
                      <ArrowLeft className="h-3 w-3 ml-1 rotate-180" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Live Chat */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Chat with our support team for instant assistance
                  </p>
                  <Button className="w-full">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Headquarters</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>123 Commerce Street</p>
                    <p>Shopping City, SC 12345</p>
                    <p>United States</p>
                    <Badge variant="secondary">Main Office</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Showroom</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>456 Retail Avenue</p>
                    <p>Mall District, SC 12346</p>
                    <p>United States</p>
                    <Badge variant="secondary">Customer Experience</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Warehouse</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>789 Industrial Park</p>
                    <p>Logistics Zone, SC 12347</p>
                    <p>United States</p>
                    <Badge variant="secondary">Distribution Center</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
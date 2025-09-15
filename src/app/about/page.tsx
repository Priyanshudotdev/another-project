import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Truck,
  Shield,
  Star,
  ArrowLeft,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "1M+" },
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Star, label: "Product Rating", value: "4.8/5" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' needs and strive to exceed their expectations with every interaction."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and privacy are protected with industry-leading security measures and transparent practices."
    },
    {
      icon: Truck,
      title: "Reliable Service",
      description: "Fast shipping and reliable delivery ensure you get your products when you need them."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly innovate to bring you the latest products and cutting-edge shopping experience."
    }
  ];

  const timeline = [
    { year: "2020", title: "Founded", description: "VibeCart was born with a vision to revolutionize online shopping" },
    { year: "2021", title: "First Million", description: "Reached our first million customers across the globe" },
    { year: "2022", title: "Expansion", description: "Expanded to 50+ countries and launched mobile app" },
    { year: "2023", title: "Innovation Award", description: "Won Best E-commerce Platform Innovation Award" },
    { year: "2024", title: "AI Integration", description: "Launched AI-powered recommendations and customer support" }
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
              About VibeCart
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make online shopping more personal, convenient, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <Target className="h-12 w-12 text-white" />
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, VibeCart started with a simple idea: create an online shopping experience that 
              feels personal and intuitive. We believe that shopping online should be as enjoyable and 
              trustworthy as shopping in your favorite local store.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Today, we serve millions of customers across 50+ countries, offering a curated selection 
              of high-quality products backed by exceptional customer service and innovative technology.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower people to discover and purchase products that enhance their lives, 
              while providing exceptional value and service. We're committed to making online 
              shopping accessible, enjoyable, and trustworthy for everyone, everywhere.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's most customer-centric online shopping destination, where 
              innovation meets convenience. We envision a future where technology enhances 
              the shopping experience, making it more personal, efficient, and enjoyable 
              for millions of people worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className="w-1/2 pr-8">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-2">{event.year}</Badge>
                        <h3 className="font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of passionate individuals is dedicated to creating the best 
              shopping experience for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", bio: "Visionary leader with 15+ years in e-commerce" },
              { name: "Mike Chen", role: "CTO", bio: "Tech innovator passionate about user experience" },
              { name: "Emily Rodriguez", role: "Head of Customer Experience", bio: "Dedicated to making customers happy" }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of our mission to revolutionize online shopping. Whether you're a customer, 
            partner, or team member, there's a place for you at VibeCart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
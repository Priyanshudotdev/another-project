import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Newspaper, 
  Download, 
  Mail, 
  Calendar,
  TrendingUp,
  Award,
  Users,
  Globe,
  ArrowLeft,
  ExternalLink,
  FileText,
  Image as ImageIcon
} from "lucide-react";
import Link from "next/link";

export default function PressPage() {
  const pressReleases = [
    {
      id: "1",
      title: "VibeCart Raises $50M Series C to Expand Global Reach",
      date: "January 15, 2024",
      category: "Funding",
      excerpt: "Leading e-commerce platform secures major investment to accelerate international expansion and product innovation.",
      content: "VibeCart announced today the successful completion of a $50 million Series C funding round led by Tech Ventures Partners, with participation from existing investors Global Capital and Innovation Fund.",
      image: "/placeholder-press.jpg"
    },
    {
      id: "2",
      title: "VibeCart Launches AI-Powered Shopping Assistant",
      date: "December 8, 2023",
      category: "Product Launch",
      excerpt: "Revolutionary AI assistant transforms online shopping experience with personalized recommendations and 24/7 support.",
      content: "VibeCart today unveiled its groundbreaking AI-powered shopping assistant, designed to provide customers with personalized product recommendations and instant support.",
      image: "/placeholder-press.jpg"
    },
    {
      id: "3",
      title: "VibeCart Named 'Best E-commerce Platform' at Tech Awards 2023",
      date: "November 20, 2023",
      category: "Awards",
      excerpt: "Recognized for innovation and customer experience, VibeCart takes home top honor at prestigious industry awards.",
      content: "VibeCart was honored with the 'Best E-commerce Platform' award at the annual Tech Awards 2023, recognizing the company's commitment to innovation and customer satisfaction.",
      image: "/placeholder-press.jpg"
    },
    {
      id: "4",
      title: "VibeCart Expands to 50+ Countries, Reaches 1 Million Customers",
      date: "October 5, 2023",
      category: "Growth",
      excerpt: "Milestone achievement as platform continues rapid global expansion and user base growth.",
      content: "VibeCart announced today that it has expanded its services to over 50 countries worldwide, serving more than 1 million active customers globally.",
      image: "/placeholder-press.jpg"
    }
  ];

  const mediaCoverage = [
    {
      id: "1",
      publication: "TechCrunch",
      title: "How VibeCart is Revolutionizing Online Shopping with AI",
      date: "January 10, 2024",
      author: "Sarah Johnson",
      link: "#",
      excerpt: "An in-depth look at how VibeCart's innovative AI technology is changing the e-commerce landscape..."
    },
    {
      id: "2",
      publication: "Forbes",
      title: "VibeCart's CEO on the Future of E-commerce",
      date: "December 15, 2023",
      author: "Michael Chen",
      link: "#",
      excerpt: "Exclusive interview with VibeCart's founder about the company's vision and upcoming innovations..."
    },
    {
      id: "3",
      publication: "Business Insider",
      title: "Why VibeCart is Winning the E-commerce Wars",
      date: "November 28, 2023",
      author: "Emily Rodriguez",
      link: "#",
      excerpt: "Analysis of VibeCart's competitive advantages and market position in the crowded e-commerce space..."
    }
  ];

  const pressKits = [
    {
      id: "1",
      title: "Company Overview",
      description: "Comprehensive information about VibeCart, our mission, and key statistics",
      type: "PDF",
      size: "2.4 MB",
      downloadLink: "#"
    },
    {
      id: "2",
      title: "Executive Bios",
      description: "Professional biographies of VibeCart's leadership team",
      type: "PDF",
      size: "1.8 MB",
      downloadLink: "#"
    },
    {
      id: "3",
      title: "Product Images",
      description: "High-resolution images of our platform and mobile app",
      type: "ZIP",
      size: "15.2 MB",
      downloadLink: "#"
    },
    {
      id: "4",
      title: "Logo Assets",
      description: "Official VibeCart logos in various formats and colors",
      type: "ZIP",
      size: "8.7 MB",
      downloadLink: "#"
    }
  ];

  const stats = [
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Users, label: "Active Customers", value: "1M+" },
    { icon: TrendingUp, label: "Annual Growth", value: "150%" },
    { icon: Award, label: "Industry Awards", value: "25+" }
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
              Press Room
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to VibeCart's press room. Here you'll find the latest news, press releases, 
              and resources for journalists and media professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Key Stats */}
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

        {/* Latest Press Releases */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Press Releases</h2>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              View All Releases
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <Badge variant="outline">{release.category}</Badge>
                      <p className="text-sm text-muted-foreground">{release.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                  <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {release.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>
          
          <div className="space-y-6">
            {mediaCoverage.map((coverage) => (
              <Card key={coverage.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{coverage.publication}</Badge>
                        <span className="text-sm text-muted-foreground">{coverage.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{coverage.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">By {coverage.author}</p>
                      <p className="text-muted-foreground">{coverage.excerpt}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Kits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Press Kits & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressKits.map((kit) => (
              <Card key={kit.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {kit.type === "PDF" ? (
                        <FileText className="h-6 w-6 text-primary" />
                      ) : (
                        <ImageIcon className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{kit.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{kit.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{kit.type} • {kit.size}</span>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Contact */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Media Inquiries</h2>
            <p className="text-lg text-muted-foreground">
              For press inquiries, interview requests, or additional information, 
              please contact our media relations team.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Email: press@vibecart.com</p>
              <p className="font-medium">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Email Press Team
              </Button>
              <Button variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download Full Press Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
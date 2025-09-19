"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  IndianRupee,
  Users,
  Heart,
  ArrowLeft,
  Search,
  Filter,
  Building,
  Award,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = [
    "all", "engineering", "design", "marketing", "sales", "customer-support", "operations", "hr"
  ];

  const jobOpenings = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
  salary: "₹30L - ₹40L",
      experience: "5+ years",
      posted: "2 days ago",
      description: "We're looking for a talented Frontend Developer to join our engineering team and help build amazing user experiences.",
      requirements: [
        "Expert knowledge of React, Next.js, and TypeScript",
        "Experience with modern CSS frameworks like Tailwind",
        "Strong understanding of responsive design principles",
        "Experience with state management (Zustand, Redux, etc.)",
        "Knowledge of testing frameworks and CI/CD"
      ],
      benefits: ["Competitive salary", "Remote work", "Health insurance", "401k matching", "Unlimited PTO"]
    },
    {
      id: "2",
      title: "UX/UI Designer",
      department: "design",
      location: "New York, NY",
      type: "Full-time",
  salary: "₹22L - ₹30L",
      experience: "3+ years",
      posted: "1 week ago",
      description: "Join our design team to create intuitive and beautiful user interfaces for our e-commerce platform.",
      requirements: [
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong portfolio demonstrating UX/UI design skills",
        "Understanding of design systems and component libraries",
        "Experience with user research and usability testing",
        "Knowledge of web design principles and accessibility"
      ],
      benefits: ["Competitive salary", "Flexible work hours", "Professional development budget", "Health insurance", "Team outings"]
    },
    {
      id: "3",
      title: "Digital Marketing Specialist",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
  salary: "₹18L - ₹22L",
      experience: "2+ years",
      posted: "3 days ago",
      description: "Help us grow our brand and reach new customers through innovative digital marketing strategies.",
      requirements: [
        "Experience with SEO, SEM, and social media marketing",
        "Proficiency in Google Analytics and marketing automation tools",
        "Strong copywriting and content creation skills",
        "Experience with email marketing campaigns",
        "Knowledge of e-commerce marketing best practices"
      ],
      benefits: ["Competitive salary", "Remote work", "Performance bonuses", "Health insurance", "Learning opportunities"]
    },
    {
      id: "4",
      title: "Customer Support Representative",
      department: "customer-support",
      location: "Austin, TX",
      type: "Full-time",
  salary: "₹11L - ₹14L",
      experience: "1+ years",
      posted: "1 day ago",
      description: "Be the voice of VibeCart and help our customers have amazing shopping experiences.",
      requirements: [
        "Excellent communication and problem-solving skills",
        "Experience with customer support in e-commerce",
        "Empathy and patience when dealing with customers",
        "Ability to work in a fast-paced environment",
        "Experience with help desk software"
      ],
      benefits: ["Competitive salary", "Health benefits", "Paid training", "Career growth opportunities", "Team environment"]
    },
    {
      id: "5",
      title: "DevOps Engineer",
      department: "engineering",
      location: "San Francisco, CA",
      type: "Full-time",
  salary: "₹35L - ₹45L",
      experience: "4+ years",
      posted: "1 week ago",
      description: "Help us scale our infrastructure and ensure our platform remains fast and reliable.",
      requirements: [
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Knowledge of containerization and orchestration (Docker, Kubernetes)",
        "Experience with CI/CD pipelines and infrastructure as code",
        "Strong understanding of security best practices",
        "Experience with monitoring and logging tools"
      ],
      benefits: ["Competitive salary", "Equity options", "Health insurance", "401k matching", "Flexible work arrangements"]
    },
    {
      id: "6",
      title: "Sales Development Representative",
      department: "sales",
      location: "Chicago, IL",
      type: "Full-time",
  salary: "₹15L - ₹20L + Incentives",
      experience: "1+ years",
      posted: "4 days ago",
      description: "Drive revenue growth by identifying and qualifying new business opportunities.",
      requirements: [
        "Strong communication and interpersonal skills",
        "Experience with sales CRM software",
        "Ability to work in a fast-paced, target-driven environment",
        "Knowledge of e-commerce or SaaS sales",
        "Self-motivated with a desire to succeed"
      ],
      benefits: ["Competitive base salary + commission", "Uncapped earning potential", "Sales training", "Career advancement", "Team incentives"]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance for you and your family" },
  { icon: IndianRupee, title: "Competitive Compensation", description: "Salaries that match or exceed industry standards with regular reviews" },
    { icon: Clock, title: "Flexible Work", description: "Remote work options and flexible hours to support work-life balance" },
    { icon: Users, title: "Growth Opportunities", description: "Professional development budget and clear career advancement paths" },
    { icon: Building, title: "Modern Office", description: "Beautiful workspaces designed for collaboration and productivity" },
    { icon: Award, title: "Recognition & Rewards", description: "Regular recognition programs and performance-based bonuses" }
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
              Careers at VibeCart
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in revolutionizing online shopping. We're looking for passionate people 
              who want to make a difference.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Join VibeCart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-3">
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

        {/* Job Search */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Filter className="h-4 w-4 text-muted-foreground mt-3" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border rounded-md bg-background"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or check back later for new opportunities.
                  </p>
                  <Button onClick={() => { setSearchTerm(""); setSelectedDepartment("all"); }}>
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.department.split('-').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}</Badge>
                          <Badge variant="outline">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline">
                            <IndianRupee className="h-3 w-3 mr-1" />
                            {job.salary}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Requirements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {job.requirements.slice(0, 3).map((req, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {req}
                              </li>
                            ))}
                            {job.requirements.length > 3 && (
                              <li className="text-sm text-primary">
                                +{job.requirements.length - 3} more requirements
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="md:ml-6 mt-4 md:mt-0">
                        <div className="text-sm text-muted-foreground mb-4">
                          Posted {job.posted}
                        </div>
                        <Button className="w-full md:w-auto">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Collaborative</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in the power of teamwork and diverse perspectives to create amazing products.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Innovative</h3>
                <p className="text-sm text-muted-foreground">
                  We encourage creativity and continuous learning to stay ahead of the curve.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Customer-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Our customers are at the heart of every decision we make and action we take.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see a position that fits your skills? We're always looking for talented people 
            to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              View All Positions
            </Button>
            <Button variant="outline" size="lg">
              Contact HR Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
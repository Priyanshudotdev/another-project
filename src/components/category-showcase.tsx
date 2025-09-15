import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  BookOpen, 
  MoreHorizontal 
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    href: "/category/electronics",
    color: "bg-blue-100 text-blue-600",
    productCount: 1250,
  },
  {
    name: "Clothing",
    icon: Shirt,
    href: "/category/clothing",
    color: "bg-pink-100 text-pink-600",
    productCount: 3420,
  },
  {
    name: "Home & Garden",
    icon: Home,
    href: "/category/home-garden",
    color: "bg-green-100 text-green-600",
    productCount: 890,
  },
  {
    name: "Sports",
    icon: Dumbbell,
    href: "/category/sports",
    color: "bg-orange-100 text-orange-600",
    productCount: 650,
  },
  {
    name: "Books",
    icon: BookOpen,
    href: "/category/books",
    color: "bg-purple-100 text-purple-600",
    productCount: 2100,
  },
  {
    name: "More",
    icon: MoreHorizontal,
    href: "/categories",
    color: "bg-gray-100 text-gray-600",
    productCount: 5000,
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide range of products organized by categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-0 hover:border-primary/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.productCount.toLocaleString()} products
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/categories">
              View All Categories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
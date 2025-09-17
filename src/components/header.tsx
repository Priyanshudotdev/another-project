"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { 
  ShoppingCart, 
  Search, 
  User, 
  Menu, 
  X, 
  Heart,
  ChevronDown 
} from "lucide-react";
import { CartDrawer } from "@/components/cart-drawer";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState<null | { id: string; email: string; name?: string | null; role?: string | null }>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    function readLocal() {
      try {
        const raw = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
        if (raw) setUser(JSON.parse(raw)); else setUser(null);
      } catch { setUser(null); }
      setAuthLoading(false);
    }
    readLocal();
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'user') {
        readLocal();
      }
    };
    const onAuthChange = () => readLocal();
    window.addEventListener('storage', onStorage);
    window.addEventListener('auth-change', onAuthChange as EventListener);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('auth-change', onAuthChange as EventListener);
    };
  }, []);

  const categories = [
    { name: "Electronics", href: "/category/electronics" },
    { name: "Clothing", href: "/category/clothing" },
    { name: "Home & Garden", href: "/category/home-garden" },
    { name: "Sports", href: "/category/sports" },
    { name: "Books", href: "/category/books" },
  ];

  return (
  <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-100 via-white to-blue-300 backdrop-blur supports-[backdrop-filter]:bg-blue-50/60">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand (text-only, no logo) */}
          <Link href="/" className="text-4xl font-extrabold text-primary">
            Allora mart
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Navigation icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Auth actions */}
            {authLoading ? null : user ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/account">Account</Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    try { localStorage.removeItem('user'); } catch {}
                    document.cookie = 'auth_token=deleted; path=/; max-age=0';
                    window.dispatchEvent(new Event('auth-change'));
                  }}
                >Logout</Button>
              </div>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/signin">Sign in</Link>
              </Button>
            )}

            {/* Wishlist */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            {/* Cart */}
            <CartDrawer />

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Categories navigation */}
        <nav className="hidden md:block border-t">
          <div className="py-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>All Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-2 w-[600px] lg:w-[800px]">
                      {categories.map((c) => (
                        <Link key={c.name} href={c.href} legacyBehavior passHref>
                          <NavigationMenuLink className="hover:bg-accent/70">
                            <div className="flex items-center justify-between gap-2 p-3 rounded-md">
                              <span className="font-medium">{c.name}</span>
                              <ChevronDown className="h-4 w-4 rotate-[-90deg] opacity-60" />
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {categories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <Link href={category.href} legacyBehavior passHref>
                      <NavigationMenuLink>
                        {category.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
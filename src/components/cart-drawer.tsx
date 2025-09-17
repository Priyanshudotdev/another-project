"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  X 
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      
      <DrawerContent className="h-[90vh]">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <span>Shopping Cart</span>
              <span className="text-sm font-normal text-muted-foreground">
                {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}
              </span>
            </DrawerTitle>
            <DrawerDescription>
              Review your items and proceed to checkout
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {items.length === 0 ? (
              <div className="text-center space-y-4 py-8">
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="font-semibold mb-1">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground">
                    Add some items to get started
                  </p>
                </div>
                <Button asChild>
                  <Link href="/products">Start Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    {/* Product image */}
                    <div className="w-16 h-16 bg-muted rounded flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">📦</div>
                    </div>

                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Remove button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <DrawerFooter className="px-4 pb-6">
              <div className="space-y-4">
                {/* Cart total */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold text-lg">
                      {getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link href="/checkout">
                      Proceed to Checkout
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/cart">View Cart</Link>
                  </Button>
                </div>
              </div>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
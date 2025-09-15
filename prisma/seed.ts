import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create demo user
  const hashedPassword = await bcrypt.hash("demo123", 12);
  
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo User",
      password: hashedPassword,
      role: "CUSTOMER",
      emailVerified: true,
    },
  });

  // Create cart for demo user
  await prisma.cart.upsert({
    where: { userId: demoUser.id },
    update: {},
    create: {
      userId: demoUser.id,
    },
  });

  // Create demo categories
  const electronicsCategory = await prisma.category.upsert({
    where: { slug: "electronics" },
    update: {},
    create: {
      name: "Electronics",
      slug: "electronics",
      description: "Electronic devices and gadgets",
      image: "/categories/electronics.jpg",
    },
  });

  const clothingCategory = await prisma.category.upsert({
    where: { slug: "clothing" },
    update: {},
    create: {
      name: "Clothing",
      slug: "clothing",
      description: "Fashion and apparel",
      image: "/categories/clothing.jpg",
    },
  });

  // Create demo products
  const products = [
    {
      name: "Wireless Bluetooth Headphones",
      description: "Premium wireless headphones with noise cancellation",
      price: 79.99,
      comparePrice: 99.99,
      sku: "WBH-001",
      slug: "wireless-bluetooth-headphones",
      categoryId: electronicsCategory.id,
      images: JSON.stringify(["/products/headphones-1.jpg", "/products/headphones-2.jpg"]),
      tags: JSON.stringify(["wireless", "bluetooth", "headphones", "audio"]),
      quantity: 50,
      featured: true,
    },
    {
      name: "Smart Fitness Watch",
      description: "Track your fitness goals with this advanced smartwatch",
      price: 199.99,
      comparePrice: 249.99,
      sku: "SFW-002",
      slug: "smart-fitness-watch",
      categoryId: electronicsCategory.id,
      images: JSON.stringify(["/products/watch-1.jpg", "/products/watch-2.jpg"]),
      tags: JSON.stringify(["smartwatch", "fitness", "health", "wearable"]),
      quantity: 30,
      featured: true,
    },
    {
      name: "Cotton T-Shirt",
      description: "Comfortable 100% cotton t-shirt",
      price: 19.99,
      comparePrice: 29.99,
      sku: "CTS-003",
      slug: "cotton-t-shirt",
      categoryId: clothingCategory.id,
      images: JSON.stringify(["/products/tshirt-1.jpg"]),
      tags: JSON.stringify(["cotton", "t-shirt", "casual", "clothing"]),
      quantity: 100,
      featured: false,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { sku: product.sku },
      update: {},
      create: product,
    });
  }

  console.log("✅ Database seeded successfully!");
  console.log("Demo credentials:");
  console.log("Email: demo@example.com");
  console.log("Password: demo123");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
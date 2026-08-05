import "./globals.css";
import type { Metadata } from "next";

import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "FoodHub AI Assistant",
  description: "AI-powered grocery shopping platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
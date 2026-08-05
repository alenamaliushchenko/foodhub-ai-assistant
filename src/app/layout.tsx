import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FoodHub AI Assistant",
  description: "AI-powered grocery shopping platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
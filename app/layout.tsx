import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "National Landing Rentals - Find Your Perfect Apartment in Crystal City, Pentagon City & Aurora Highlands",
  description: "Discover apartments and houses for rent in National Landing, VA. Browse Crystal City, Pentagon City, and Aurora Highlands rentals near Amazon HQ2, Pentagon, and Reagan Airport.",
  keywords: "National Landing rentals, Crystal City apartments, Pentagon City housing, Aurora Highlands rentals, Amazon HQ2 apartments, Virginia rentals",
  openGraph: {
    title: "National Landing Rentals - Find Your Perfect Apartment",
    description: "Discover apartments and houses for rent in National Landing, VA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

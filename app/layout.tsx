import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import cn from 'classnames';
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
   subsets: ["latin"],
   variable: "--font-caption" 
  });

export const metadata: Metadata = {
  title: "KINDA ABDOUL LATIF . Software Engineer",
  description: "Portfolio  KINDA ABDOUL LATIF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full h-full ">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, GeistMono.variable, "--font-sans h-full bg-background  text-foreground")}>{children}</body>
    </html>
  );
}

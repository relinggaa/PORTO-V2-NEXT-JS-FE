import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relingga Aditya",
  description: "Portfolio of Relingga Aditya - Web Developer & Tech Enthusiast",
  keywords: ["Relingga Aditya", "Portfolio", "Web Developer", "Tech Enthusiast"],
  icons: {
    icon: "/img/logo-relingga.png",
    shortcut: "/img/logo-relingga.png",
    apple: "/img/logo-relingga.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "Relingga Aditya | Full Stack Developer Portfolio",
  description: "Portfolio of Relingga Aditya - A Full Stack Developer and Software Engineering student at Telkom University. Specialized in building clean interfaces, smooth animations, and scalable backends.",
  keywords: ["Relingga Aditya", "Relingga", "Aditya", "Full Stack Developer", "Software Engineer", "Telkom University", "Web Developer Indonesia", "Portfolio", "Frontend", "Backend"],
  authors: [{ name: "Relingga Aditya" }],
  creator: "Relingga Aditya",
  publisher: "Relingga Aditya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Relingga Aditya | Full Stack Developer Portfolio",
    description: "Explore the digital world of Relingga Aditya - crafting premium web experiences with code and design.",
    url: "https://www.relinggaa.my.id",
    siteName: "Relingga Aditya Portfolio",
    images: [
      {
        url: "/img/relinggaa.png",
        width: 1200,
        height: 630,
        alt: "Relingga Aditya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relingga Aditya | Full Stack Developer",
    description: "Full Stack Developer crafting premium web experiences.",
    images: ["/img/relinggaa.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kreasi Bumi Nusantara",
  description: "Kreasi Bumi Nusantara is an Interior Design and Build company established in 2020. We have successfully completed a wide range of projects, including residential, office, and commercial spaces. Our expertise covers Interior Design, Architectural renovation, and MEP (Mechanical, Electrical, and Plumbing) works. Driven by creative innovation and a commitment to staying up to date with the latest interior finishing materials, we approach every project with meticulous attention to detail. We consistently offer clients thoughtful initiatives and alternative solutions to ensure the best quality, competitive pricing, and on time delivery.",
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
        <Analytics />
      </body>
    </html>
  );
}

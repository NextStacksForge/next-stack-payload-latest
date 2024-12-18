import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

const sfProTextRegular = localFont({
  src: "./fonts/SF-Pro-Text-Regular.otf",
  variable: "--font-sf-pro-text-regular",
  weight: "100 900",
});
const sfProTextItalic = localFont({
  src: "./fonts/SF-Pro-Text-RegularItalic.otf",
  variable: "--font-sf-pro-text-italic",
  weight: "100 900",
});

const sfPro = localFont({
  src: "./fonts/SF-Pro.ttf",
  variable: "--font-sf-pro",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProTextRegular.variable} ${sfProTextItalic.variable} ${sfPro.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

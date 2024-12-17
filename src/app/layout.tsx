import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const fontLogo = localFont({
  src: [
    {
      path: "../assets/fonts/FacultyGlyphic-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-logo",
});

const lilGroteskFont = localFont({
  src: [
    {
      path: "../assets/fonts/LilGrotesk-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/LilGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/LilGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/LilGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/LilGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/LilGrotesk-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-lil-grotesk", // Custom CSS variable for the font
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandad Mohamed",
  description: "Portfolio Kandad Mohamed Web Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`bg-white dark:bg-black text-white relative ${fontLogo.className} ${lilGroteskFont.className} overflow-x-hidden`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

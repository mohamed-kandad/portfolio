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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandad Mohamed",
  description: "Portfolio Kandad Mohamed Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-black text-white relative ${fontLogo.className} overflow-x-hidden`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

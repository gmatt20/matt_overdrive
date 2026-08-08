import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Matthew Garcia | SWE",
  description:
    "Software engineer building AI-powered products people actually use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} dark antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocalGuard - Disable Chrome Extensions on localhost",
  description: "Automatically manage Chrome extensions when developing on localhost. LocalGuard disables extensions on localhost and restores them when leaving, optimized for Next.js and modern frameworks.",
  keywords: ["Chrome extension", "local development", "Next.js", "developer tools", "extension manager"],
  openGraph: {
    title: "LocalGuard - Disable Chrome Extensions on localhost",
    description: "Automatically manage Chrome extensions when developing on localhost. LocalGuard disables extensions on localhost and restores them when leaving, optimized for Next.js and modern frameworks.",
    type: "website",
    url: "https://localguard.moinulmoin.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LocalGuard - Disable Chrome Extensions on localhost",
    description: "Automatically manage Chrome extensions when developing on localhost. LocalGuard disables extensions on localhost and restores them when leaving, optimized for Next.js and modern frameworks.",
    creator: "@immoinulmoin",
  },
  metadataBase: new URL("https://localguard.moinulmoin.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

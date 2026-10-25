import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  metadataBase: new URL(
    "https://nirmal-portfolio-azure.vercel.app"
  ),
  title: {
    default:
      "Nirmal Kumar Thangaraju | Senior SDET & Quality Engineer",
    template: "%s | Nirmal Kumar Thangaraju",
  },
  description:
    "Explore Nirmal Kumar Thangaraju’s portfolio: 8 years in quality engineering, Playwright automation, API testing, and US Federal Healthcare IT projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="top" className="bg-slate-900 font-sans text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col bg-slate-950 text-white">
          <Navbar />

          <main className="w-full flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

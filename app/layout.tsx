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
  title: "Nirmal | SDET - Quality",
  description:
    "Nirmal’s personal portfolio: 8 years in quality engineering, with experience in Playwright, TypeScript, API testing, GitHub Actions, and Docker.",
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

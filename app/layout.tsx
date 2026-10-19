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
  title: "Nirmal | SDET - Quality Engineer",
  description:
    "Nirmal’s personal portfolio: 8 years in quality engineering, with experience in Playwright, TypeScript, API testing, GitHub Actions, and Docker.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{
        <div className="flex min-h-screen flex-col bg-slate-950 text-white">
  <Navbar />

  <main className="mx-auto w-full max-w-5xl flex-1 px-6">
    {children}
  </main>

  <Footer name="Nirmal" />
</div>}</body>
    </html>
  );
}

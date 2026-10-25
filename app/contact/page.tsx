import Contact from "../components/Contact";
import type { Metadata } from "next";

export default function ContactPage() {
  return <Contact />;
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Nirmal Kumar Thangaraju to discuss quality engineering, test automation, and software development opportunities.",
};
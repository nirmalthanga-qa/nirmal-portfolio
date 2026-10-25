import Skills from "../components/Skills";
import type { Metadata } from "next";

export default function SkillsPage() {
  return <Skills />;
}

export const metadata: Metadata = {
  title: "Skills & Tools",
  description:
    "Explore Nirmal’s skills in Playwright, TypeScript, API testing, accessibility testing, GitHub Actions, Docker, and quality engineering.",
};
import Projects from "../components/Projects";
import type { Metadata } from "next";

export default function ProjectsPage() {
  return <Projects />;
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Nirmal’s US Federal Healthcare IT project experience, SDET Practice Lab, and personal portfolio development.",
};
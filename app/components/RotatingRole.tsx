"use client";

import { useEffect, useState } from "react";

const roles = [
  { prefix: "Senior ", title: "SDET" },
  { prefix: "", title: "AI-Driven Quality Engineer" },
];

export default function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const role = roles[roleIndex];

  return (
    <span>
      {role.prefix}
      <span className="text-teal-400">{role.title}</span>
    </span>
  );
}
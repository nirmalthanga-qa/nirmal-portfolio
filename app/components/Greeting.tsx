"use client";

import { useEffect, useState } from "react";

export default function Greeting() {
  const [showTamil, setShowTamil] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShowTamil((previous) => !previous);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-4 text-lg font-medium text-teal-400">
      <span lang={showTamil ? "ta" : "en"}>
        {showTamil ? "வணக்கம்" : "Welcome"}
      </span>
      ! I’m Nirmal Kumar.
    </p>
  );
}
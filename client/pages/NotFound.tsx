"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after a short delay (optional)
    const timer = setTimeout(() => {
      router.push("/");
    }, 0); // or use 2000 (2 seconds) if you want to show the message first

    return () => clearTimeout(timer);
  }, [router]);

  return null; // Don't render anything, just redirect
}

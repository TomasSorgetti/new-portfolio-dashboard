"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  useLayoutEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

  if (!token) {
    return null;
  }

  return (
    <main>
      <h1>Hello World!!</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Logout
      </button>
    </main>
  );
}

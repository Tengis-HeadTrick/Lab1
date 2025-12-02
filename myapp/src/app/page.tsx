"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");

    // Нэвтрээгүй → Login руу шилжүүлнэ
    if (!user) {
      router.push("/form/login");
    }
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
      <p>Манай вэбэд тавтай морилно уу!</p>
    </div>
  );
}

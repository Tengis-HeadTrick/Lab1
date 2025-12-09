"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const logged = localStorage.getItem("loggedInUser");
    if (logged) {
      router.push("/"); // Аль хэдийн нэвтэрсэн → Home руу
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const stored = localStorage.getItem("registeredUser");
    if (!stored) {
      setError("Бүртгэлтэй хэрэглэгч олдсонгүй!");
      return;
    }

    const user = JSON.parse(stored);

    if (email === user.email && password === user.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/"); // Нэвтэрсний дараа HOME руу
    } else {
      setError("Имэйл эсвэл нууц үг буруу байна!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100 p-6">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm" onSubmit={handleLogin}>
        
        <h2 className="text-2xl font-bold mb-4 text-center">Нэвтрэх</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Имэйл"
          className="border p-2 rounded w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Нууц үг"
          className="border p-2 rounded w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
        >
          Нэвтрэх
        </button>

        {/* Register товч */}
        <button
          type="button"
          onClick={() => router.push("/form/register")}
          className="mt-3 bg-gray-200 w-full p-2 rounded hover:bg-gray-300"
        >
          Бүртгэл үүсгэх
        </button>

      </form>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const logged = localStorage.getItem("loggedInUser");
    if (logged) {
      router.push("/"); // Нэвтэрсэн бол Home руу
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Бүх талбарыг бөглөнө үү!");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    router.push("/form/login"); // Бүртгэл амжилттай → Login руу
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm" onSubmit={handleRegister}>

        <h2 className="text-2xl font-bold mb-4 text-center">Бүртгүүлэх</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Нэр"
          className="border p-2 rounded w-full mb-3"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700">
          Бүртгүүлэх
        </button>

      </form>
    </div>
  );
}

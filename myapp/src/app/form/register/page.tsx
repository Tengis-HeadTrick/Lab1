"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirm) {
      setError("Бүх талбарыг бөглөнө үү!");
    } else if (!email.includes("@")) {
      setError("Имэйл буруу байна!");
    } else if (password.length < 6) {
      setError("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой!");
    } else if (password !== confirm) {
      setError("Нууц үг таарахгүй байна!");
    } else {
      setError("");
      const userData = { name, email, password };
      localStorage.setItem("registeredUser", JSON.stringify(userData));
      alert(`Бүртгэл амжилттай!\nТавтай морил, ${name}!`);
      router.push("/"); // → Home руу автоматаар шилжүүлэх
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-80 bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-xl font-semibold text-center mb-2">
          Register Form
        </h2>

        <input
          type="text"
          placeholder="Нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Имэйл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Нууц үг баталгаажуулах"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="border p-2 rounded"
        />

        {error && <span className="text-red-500 text-sm">{error}</span>}

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
}

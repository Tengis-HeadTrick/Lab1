"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("registeredUser");
    if (!storedUser) {
      setError("Бүртгэлтэй хэрэглэгч олдсонгүй!");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (email !== userData.email) {
      setError("Имэйл буруу байна!");
    } else if (password !== userData.password) {
      setError("Нууц үг буруу байна!");
    } else {
      setError("");
      alert(`Нэвтрэлт амжилттай!\nТавтай морил, ${userData.name}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(userData)); // нэвтэрсэн хэрэглэгч
      router.push("/"); // → Home руу шилжүүлэх
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-80 bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-xl font-semibold text-center mb-2">Login Form</h2>

        <input
          type="email"
          placeholder="Email хаяг"
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

        {error && <span className="text-red-500 text-sm">{error}</span>}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Нэвтрэх
        </button>
      </form>
    </div>
  );
}

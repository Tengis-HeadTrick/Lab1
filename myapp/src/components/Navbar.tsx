"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedInUser") || localStorage.getItem("registeredUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    alert("Та системээс гарлаа!");
  };

  return (
    <nav className="flex justify-between items-center px-1 py-3 bg-blue-1000 text-white">
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/calc">Calculator</Link>
        <Link href="/todo">Todo</Link>
      </div>

      {!user ? (
        <div className="flex gap-4">
          <Link href="/form/login" className="hover:text-green-400">Login</Link>
          <Link href="/form/register" className="hover:text-blue-400">Register</Link>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span>Сайн байна уу, {user.name} 👋</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

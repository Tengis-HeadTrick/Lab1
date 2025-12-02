"use client";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="/weather">Weather</Link>
      </div>

 
      <div></div>

    </nav>
  );
}

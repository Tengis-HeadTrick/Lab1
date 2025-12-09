"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/form/login") ||
    pathname.startsWith("/form/register");

  return (
    <>
      {!isAuthPage && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <main className="min-h-screen p-6">{children}</main>

      {!isAuthPage && <Footer />}
    </>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./form/login/page";   

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInUser");

    if (loggedIn) {
      router.push("/");
    }
  }, [router]);

  return <LoginForm />;
}

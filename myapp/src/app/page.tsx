"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const logged = localStorage.getItem("loggedInUser");

    if (!logged) {
      router.push("/form/login");
    } else {
      const u = JSON.parse(logged);
      setUser(u);
      setFirst(u.first_name);
      setLast(u.last_name);
    }
  }, [router]);

  if (!user) return null;

  // API CALL — Edit User
  const handleEditUser = async () => {
    const req = {
      action: "edituser",
      user_id: user.user_id,
      first_name: first,
      last_name: last,
    };

    try {
      const res = await fetch("/api/user/edituser/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });

      const data = await res.json();

      // Хэрвээ амжилттай бол resultCode = 8720
      if (data.resultCode === 8720) {
        setMsg(data.resultMessage);

        // Local user update
        const updated = { ...user, first_name: first, last_name: last };
        setUser(updated);
        localStorage.setItem("loggedInUser", JSON.stringify(updated));

        setShowEdit(false);
      } else {
        setMsg(data.resultMessage || "Алдаа гарлаа.");
      }
    } catch (err) {
      setMsg("Server Error!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/form/login");
  };

  return (
    <div className="p-8 max-w-xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">
        Hello, {user.first_name}! 👋
      </h1>
      <p className="text-lg">Welcome to your Dashboard.</p>

      <button
        onClick={() => setShowEdit(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Edit Profile
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>

      {msg && <p className="text-blue-700">{msg}</p>}

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4">
            <h2 className="text-xl font-bold">Edit User</h2>

            <input
              className="border p-2 w-full rounded"
              placeholder="First name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />

            <input
              className="border p-2 w-full rounded"
              placeholder="Last name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />

            <button
              onClick={handleEditUser}
              className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
            >
              Save
            </button>

            <button
              onClick={() => setShowEdit(false)}
              className="bg-gray-300 w-full p-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

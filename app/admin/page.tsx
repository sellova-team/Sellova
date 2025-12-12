"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [users, setUsers] = useState([]);

  // --- مرحله 1: چک کردن ورود و نقش ---
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      const snap = await getDoc(doc(db, "users", user.uid));
      const data: any = snap.data();

      if (!data || data.role !== "admin") {
        alert("Access denied - Admin only");
        router.replace("/");
        return;
      }

      setAllowed(true);
      setLoading(false);
    });

    return () => unsub();
  }, [router]);

  // --- مرحله 2: گرفتن لیست کاربران ---
  useEffect(() => {
    if (!allowed) return; // فقط وقتی نقش ادمین تایید شد اجرا شود

    const loadUsers = async () => {
      const res = await fetch("/api/admin/users");
      const data = await res.json();

      if (data.ok) setUsers(data.users);
    };

    loadUsers();
  }, [allowed]);

  // --- مرحله 3: خروجی صفحه ---
  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (!allowed) return null;

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1 style={{ marginBottom: 20 }}>Sellova Admin Dashboard</h1>

      <h2>Users List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid white", padding: 8 }}>Email</th>
            <th style={{ borderBottom: "1px solid white", padding: 8 }}>Role</th>
            <th style={{ borderBottom: "1px solid white", padding: 8 }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u.id}>
              <td style={{ padding: 8 }}>{u.email}</td>
              <td style={{ padding: 8 }}>{u.role}</td>
              <td style={{ padding: 8 }}>{u.creditBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

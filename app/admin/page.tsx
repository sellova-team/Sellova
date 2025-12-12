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

  // مرحله 1: چک کردن اینکه کاربر وارد شده باشد
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      // مرحله 2: چک کردن نقش ادمین
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

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (!allowed) return null;

  // مرحله 3: گرفتن لیست کاربران از API
  useEffect(() => {
    const loadUsers = async () => {
      const res = await fetch("/api/admin/users");
      const data = await res.json();

      if (data.ok) {
        setUsers(data.users);
      }
    };

    loadUsers();
  }, []);

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

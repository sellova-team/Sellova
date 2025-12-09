"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists() && snap.data().role === "admin") {
        setAllowed(true);
      } else {
        setAllowed(false);
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading...</p>;
  if (!allowed) return <p style={{ padding: 40 }}>Access denied</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin 🎉</p>
    </div>
  );
}

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type") || "avatar-single";

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = today.getTime();

    const q = query(
      collection(db, "logs"),
      where("type", "==", type),
      where("createdAt", ">=", start)
    );

    const snap = await getDocs(q);

    return NextResponse.json({ count: snap.size });
  } catch (err) {
    console.error("Daily limit fetch error:", err);
    return NextResponse.json({ count: 0 });
  }
}

"use client";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <button
        onClick={() => alert("Client route OK")}
        style={{
          padding: "12px 18px",
          borderRadius: 12,
          background: "#2563eb",
          color: "#fff",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";

type Card = { href: string; title: string; desc: string; icon?: string };

const CARDS: Card[] = [
  { href: "/images/generate",     title: "Promotional images",    desc: "Create polished promo visuals from a product photo.", icon: "🖼️" },
  { href: "/videos/generate",     title: "Promotional videos",    desc: "Preview a short promo (static preview for now).",     icon: "🎬" },
  { href: "/captions",            title: "Captions & hashtags",   desc: "Generate captions and discover relevant hashtags.",    icon: "✍️" },
  { href: "/consultation",        title: "Consultation",          desc: "Get ad messaging ideas tailored to your product.",     icon: "👨‍💼" },
  { href: "/competitor-analysis", title: "Competitor analysis",   desc: "Positioning insights versus competitors.",             icon: "📊" },
  { href: "/images/guidance",     title: "Upload guidance",       desc: "Rules for taking/uploading product images.",           icon: "📄" },
  { href: "/settings",            title: "Settings",              desc: "Profile and preferences.",                             icon: "⚙️" },
  { href: "/upgrade",             title: "Upgrade plan",          desc: "Unlock more credits and features.",                    icon: "🚀" },
];

export default function Page() {
  const freeUsed = 2;
  const freeTotal = 3;
  const pct = Math.min(100, Math.round((freeUsed / freeTotal) * 100));

  return (
    <main className="min-h-screen bg-[#0b1420] text-white">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Large but elegant logo */}
          <Image
            src="/logo.png"
            alt="Sellova"
            width={720}   // ~3-4x bigger than default, looks premium without breaking layout
            height={200}
            priority
            className="h-32 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link href="/help" className="hover:text-white">Help</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </header>

      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Dashboard</h1>
        <p className="text-white/70 mt-2">Choose a tool to get started.</p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition-all p-6 flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl select-none">{c.icon}</div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
              </div>
              <p className="text-sm text-white/70 mt-2 flex-1">{c.desc}</p>
              <div className="mt-4 text-sm font-medium text-[#7aa8ff] group-hover:text-[#a9c5ff]">
                Open →
              </div>

              {/* subtle sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Credits */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-white/80">
              Free credits: <b>{freeUsed}</b> / <b>{freeTotal}</b>
            </span>
            <span className="text-white/50">
              Need more? <Link href="/upgrade" className="underline hover:text-white">Upgrade</Link>
            </span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[linear-gradient(90deg,#3b82f6,#2563eb)]"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Quick stats (same vibe as before) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div>Orders pending: <b>2</b></div>
            <div>Orders completed: <b>0</b></div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div>Current plan: <b>Free</b></div>
            <div>Next reset: <b>1st of month</b></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 flex items-center justify-between text-sm text-white/60">
          <div className="flex items-center gap-6">
            <Link href="/help" className="hover:text-white">Help</Link>
            <Link href="/contact" className="hover:text-white">Contact us</Link>
          </div>
          <div className="text-white/40">© {new Date().getFullYear()} Sellova</div>
        </footer>
      </section>
    </main>
  );
}

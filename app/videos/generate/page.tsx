import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b1420] text-white">
      {/* Top bar */}
      <header className="mx-auto w-full max-w-6xl px-6 pt-6 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Use your /public/logo.png; keep it tasteful (not stretched) */}
          <Image src="/logo.png" alt="Sellova" width={220} height={60} priority />
        </Link>
      </header>

      {/* Title */}
      <section className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Generate promotional videos with AI
        </h1>
        <p className="text-white/60 mt-2">
          Upload a product shot, choose a style and length, then preview the result.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: form card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Upload image</label>
              <div className="rounded-xl border border-dashed border-white/20 bg-black/20 h-40 flex items-center justify-center">
                <div className="text-center text-white/70">
                  <div className="mb-2 text-2xl">⬆️</div>
                  <div className="text-sm">Drag & drop or click to browse</div>
                  <div className="text-xs mt-1 opacity-60">PNG / JPG, up to 10MB</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Aesthetic</label>
                <select className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Luxury</option>
                  <option>Minimal</option>
                  <option>Bold</option>
                  <option>Aesthetic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Video length</label>
                <select className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>5 seconds</option>
                  <option>10 seconds</option>
                  <option>15 seconds</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <input
                className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Optional prompt (e.g. warm light, soft background)…"
              />
              <button className="rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-2.5 font-semibold transition">
                Generate
              </button>
            </div>

            <div className="text-xs text-white/50 mt-4">
              3 free credits remaining — upgrade to unlock more.
            </div>
          </div>

          {/* RIGHT: preview card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="p-6 pb-0">
              <div className="text-sm font-medium mb-3">Generated video preview</div>
            </div>
            {/* Use your rug image from /public/sample.png */}
            <div className="px-6 pb-6">
              <div className="relative w-full h-[360px] rounded-xl overflow-hidden bg-black/20">
                <Image
                  src="/sample.png"
                  alt="Luxury promo preview"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Fake play button overlay */}
                <div className="absolute inset-0 grid place-items-center">
                  <button
                    type="button"
                    className="h-14 w-14 rounded-full bg-white/90 text-black grid place-items-center shadow-lg"
                    aria-label="Play preview"
                  >
                    ▶
                  </button>
                </div>
              </div>
              <p className="text-xs text-white/60 mt-3">
                This is a static preview image. Later we’ll connect it to real video generation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

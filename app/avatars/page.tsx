"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type Tab = "Woman" | "Man" | "Kid";
type AvatarItem = { id: string; url: string };

function range(n: number) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function makeList(prefix: string, count: number): AvatarItem[] {
  return range(count).map((i) => ({
    id: `${prefix.split("/").pop()}-${i}`,
    url: `${prefix}/${i}.jpg`,
  }));
}

export default function AvatarsPage() {
  const router = useRouter();

  // 30 images each
  const WOMAN_LIST = makeList("/assets/avatar/woman", 30);
  const MAN_LIST = makeList("/assets/avatar/man", 30);
  const KID_LIST = makeList("/assets/avatar/kid", 30);

  const [tab, setTab] = useState<Tab>("Woman");
  const [selected, setSelected] = useState<AvatarItem | null>(null);
  const [uploadedURL, setUploadedURL] = useState<string | null>(null);
  const [created, setCreated] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const list = tab === "Woman" ? WOMAN_LIST : tab === "Man" ? MAN_LIST : KID_LIST;

  const onUploadClick = () => fileRef.current?.click();
  const onFile = (f: File) => {
    const url = URL.createObjectURL(f);
    setUploadedURL(url);
    setSelected({ id: "custom", url });
  };

  const onCreate = () => {
    if (!selected && !uploadedURL) {
      alert("Pick an avatar or upload a photo.");
      return;
    }
    setCreated(true);
  };

  const onContinueImages = () => router.push("/images/generate");
  const onContinueVideos = () => router.push("/videos/generate");

  return (
    <main className="min-h-screen bg-[#0e1420] text-white">
      {/* Header */}
      <header className="w-full border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-sky-500/20 text-sky-300 grid place-content-center font-bold">
            S
          </div>
          <div className="font-semibold tracking-wide">sellova</div>
          <nav className="ml-auto text-sm flex items-center gap-3">
            <a href="/dashboard" className="text-white/70 hover:text-white">Dashboard</a>
            <a href="/images/generate" className="text-white/70 hover:text-white">Images</a>
            <a href="/videos/generate" className="text-white/70 hover:text-white">Videos</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-2xl md:text-3xl font-bold">Generate a custom avatar</h1>

        {/* Upload */}
        <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={onUploadClick}
                className="rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm hover:bg-white/20"
              >
                Upload a photo
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onFile(f);
                }}
              />
              <div className="text-white/70 text-sm">
                {uploadedURL ? "Image uploaded successfully" : "PNG/JPG up to 10MB"}
              </div>
            </div>

            {uploadedURL ? (
              <button
                onClick={onContinueImages}
                className="rounded-md bg-sky-600 hover:bg-sky-700 px-3 py-2 text-sm font-semibold"
              >
                Continue to avatar creation
              </button>
            ) : null}
          </div>

          {uploadedURL ? (
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden border border-white/10 w-40 h-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={uploadedURL} alt="uploaded" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : null}
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2 text-xs">
          {(["Woman", "Man", "Kid"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-md border ${
                tab === t ? "bg-sky-600 border-sky-600" : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {t} avatars
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-4 grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {list.map((av) => (
            <button
              key={av.id}
              onClick={() => setSelected(av)}
              className={`group rounded-lg overflow-hidden border ${
                selected?.id === av.id ? "border-sky-500 ring-1 ring-sky-500" : "border-white/10 hover:border-white/25"
              }`}
              title="Pick avatar"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={av.url} alt="avatar" className="h-28 w-full object-cover" />
            </button>
          ))}
        </div>

        {/* Create */}
        <div className="mt-6">
          <button
            onClick={onCreate}
            className="rounded-md bg-white/10 border border-white/10 px-4 py-2 text-sm hover:bg-white/20"
          >
            Create your avatar
          </button>
          {created ? (
            <div className="mt-3 text-sm text-white/80">
              Avatar selected. You can continue and use it in generators.
            </div>
          ) : null}
        </div>

        {/* Continue */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={onContinueImages}
            className="rounded-md bg-sky-600 hover:bg-sky-700 px-4 py-2 text-sm font-semibold"
          >
            Continue to images
          </button>
          <button
            onClick={onContinueVideos}
            className="rounded-md bg-sky-600/70 hover:bg-sky-700/80 px-4 py-2 text-sm font-semibold"
          >
            Continue to videos
          </button>
        </div>
      </section>
    </main>
  );
}

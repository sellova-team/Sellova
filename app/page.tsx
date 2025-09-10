export default function Home() {
  return (
    <main className="w-full flex justify-center bg-white">
      <div className="relative w-full max-w-[1200px]">
        {/* hero image */}
        <img
          src="/homepage.png?v=5"
          alt="Sellova hero"
          className="block w-full h-auto select-none"
          draggable={false}
        />

        {/* CTA on top of the image (desktop/tablet) */}
        <a
          href="/login"
          className="hidden md:inline-flex absolute z-10
                     left-[6.5%] top-[62%]
                     bg-blue-600 hover:bg-blue-700 text-white
                     font-semibold rounded-xl shadow-lg
                     px-8 py-3 text-lg"
        >
          Start Now
        </a>
      </div>

      {/* Mobile fallback CTA (sticky at bottom) */}
      <div className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-6 z-20">
        <a
          href="/login"
          className="inline-flex bg-blue-600 hover:bg-blue-700 text-white
                     font-semibold rounded-xl shadow-lg
                     px-6 py-3 text-base rounded-xl"
        >
          Start Now
        </a>
      </div>
    </main>
  );
}

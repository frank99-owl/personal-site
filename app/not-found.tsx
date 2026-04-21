import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-ink px-6">
      <h1 className="font-serif text-6xl sm:text-8xl tracking-tight mb-4">
        404
      </h1>
      <p className="text-muted text-lg mb-8 text-center max-w-sm">
        This page does not exist.
      </p>
      <Link
        href="/en"
        className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}

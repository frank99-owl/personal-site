import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="font-serif text-6xl sm:text-8xl tracking-tight mb-4">
        404
      </h1>
      <p className="text-muted text-lg mb-8">
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

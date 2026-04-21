"use client";

import { useEffect } from "react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="font-serif text-2xl text-ink mb-4">
        Something went wrong
      </h2>
      <p className="text-muted mb-8 max-w-md mx-auto">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

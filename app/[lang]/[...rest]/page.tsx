import { notFound } from "next/navigation";

// Unknown paths under a locale (/zh/anything) land here so they render
// app/[lang]/not-found.tsx inside the locale layout. Without this route they
// fall through to the bare root 404, which has no navbar and is English-only.
export default function CatchAll() {
  notFound();
}

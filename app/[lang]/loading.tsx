export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 flex flex-col items-center gap-6">
      <div className="w-10 h-10 border-2 border-line border-t-orange rounded-full animate-spin" />
      <p className="text-sm text-muted animate-pulse">Loading…</p>
    </div>
  );
}

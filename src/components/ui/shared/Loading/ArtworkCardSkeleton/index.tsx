export function ArtworkCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface p-0 animate-pulse">
      <div className="aspect-[4/3] w-full bg-muted" />
      <div className="space-y-3 p-4">
        <div className="h-5 w-20 rounded bg-muted" />
        <div className="h-5 w-3/4 rounded bg-muted" />
        <div className="h-4 w-1/2 rounded bg-muted" />
        <div className="h-3 w-2/3 rounded bg-muted" />
        <div className="pt-2">
          <div className="h-4 w-28 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
export function HighlightCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative p-5">
        <div className="relative aspect-[4/3] animate-pulse overflow-hidden rounded-xl bg-muted">

          <div className="absolute left-3 top-3 h-6 w-28 rounded-full bg-border/70" />
        </div>
      </div>

      <div className="space-y-4 p-5 pt-0">
        <div>
          <div className="mb-3 h-3 w-32 animate-pulse rounded bg-muted" />

          <div className="space-y-2">
            <div className="h-5 w-4/5 animate-pulse rounded bg-muted" />
            <div className="h-5 w-2/5 animate-pulse rounded bg-muted" />
          </div>

          <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-muted" />
        </div>

        <div className="flex items-center gap-2 border-t border-border pt-4">
          <div className="h-4 w-4 animate-pulse rounded bg-muted" />
          <div className="h-4 w-24 animate-pulse rounded bg-muted" />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-muted" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </article>
  );
}
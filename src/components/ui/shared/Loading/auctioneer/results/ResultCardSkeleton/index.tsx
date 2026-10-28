export function ResultCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface animate-pulse">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted/80">
        <div className="absolute left-3 top-3 h-7 w-24 rounded-full bg-muted" />
        <div className="absolute right-3 top-3 h-7 w-20 rounded-full bg-muted" />
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-1.5">
          <div className="h-3 w-20 rounded bg-muted/60" />
          <div className="h-6 w-3/4 rounded-md bg-muted" />
          <div className="h-3.5 w-1/3 rounded-md bg-muted/60" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-background p-3 space-y-2">
            <div className="h-3 w-16 rounded bg-muted/60" />
            <div className="h-6 w-24 rounded bg-muted" />
          </div>
        </div>

        <div className="border-t border-border pt-3">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 h-4 w-4 rounded-full bg-muted/60 shrink-0" />
            <div className="space-y-1.5">
              <div className="h-3 w-20 rounded bg-muted/60" />
              <div className="h-4 w-32 rounded bg-muted" />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="h-11 w-full rounded-xl bg-muted/60" />
        </div>
      </div>
    </article>
  );
}
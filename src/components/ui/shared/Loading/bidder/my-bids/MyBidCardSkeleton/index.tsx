export function MyBidCardSkeleton() {
  return (
    <article
      aria-label="Carregando lance"
      aria-busy="true"
      className="overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="h-48 w-full shrink-0 animate-pulse bg-muted sm:h-auto sm:min-h-48 sm:w-44" />

        <div className="flex min-w-0 flex-1 flex-col p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-muted" />
            </div>

            <div className="h-6 w-32 animate-pulse rounded-full bg-muted" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-3 w-28 animate-pulse rounded bg-muted" />
              <div className="h-6 w-32 animate-pulse rounded-md bg-muted" />
            </div>

            <div className="space-y-2">
              <div className="h-3 w-20 animate-pulse rounded bg-muted" />
              <div className="h-6 w-28 animate-pulse rounded-md bg-muted" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-24 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1 animate-pulse rounded bg-muted" />
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-24 animate-pulse rounded bg-muted" />
            </div>

            <div className="h-5 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </div>
    </article>
  );
}

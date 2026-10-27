export function MyWinCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-52 shrink-0 animate-pulse bg-muted sm:h-auto sm:w-56 sm:min-h-72">
          <div className="absolute left-3 top-3 h-7 w-28 rounded-full bg-surface/60" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1 animate-pulse">
              <div className="mt-2 h-6 w-3/4 rounded-md bg-muted" />
              <div className="mt-4 h-4 w-full rounded-md bg-muted" />
              <div className="mt-2 h-4 w-2/3 rounded-md bg-muted" />
            </div>

            <div className="h-6 w-20 animate-pulse rounded-full bg-muted" />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 border-y border-border py-4 sm:grid-cols-2">
            <div className="animate-pulse">
              <div className="h-3 w-20 rounded bg-muted" />
              <div className="mt-3 h-6 w-32 rounded-md bg-muted" />
            </div>

            <div className="animate-pulse">
              <div className="h-3 w-24 rounded bg-muted" />
              <div className="mt-3 h-5 w-36 rounded-md bg-muted" />
            </div>
          </div>
          <div className="mt-5">
            <div className="h-11 w-full animate-pulse rounded-xl bg-muted sm:w-64" />
          </div>
        </div>
      </div>
    </article>
  );
}
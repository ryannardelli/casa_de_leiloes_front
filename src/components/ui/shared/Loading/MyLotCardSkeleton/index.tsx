export function MyLotCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-48 shrink-0 animate-pulse bg-muted sm:h-auto sm:w-52 sm:min-h-64" />

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="h-3 w-36 animate-pulse rounded bg-muted" />

              <div className="mt-3 h-6 w-3/4 animate-pulse rounded bg-muted" />
            </div>

            <div className="h-5 w-5 shrink-0 animate-pulse rounded bg-muted" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-3">
            <div>
              <div className="h-3 w-20 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-6 w-28 animate-pulse rounded bg-muted" />
            </div>

            <div>
              <div className="h-3 w-24 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-5 w-16 animate-pulse rounded bg-muted" />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="h-3 w-20 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-5 w-full max-w-40 animate-pulse rounded bg-muted" />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <div className="h-11 w-full animate-pulse rounded-xl bg-muted sm:w-28" />
            <div className="h-11 w-full animate-pulse rounded-xl bg-muted sm:w-36" />
          </div>
        </div>
      </div>
    </article>
  );
}
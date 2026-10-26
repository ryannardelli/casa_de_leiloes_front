export function WalletStatsSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3].map((stat) => (
        <article
          key={stat}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="h-4 w-32 animate-pulse rounded bg-muted" />

              <div className="mt-3 h-7 w-36 max-w-full animate-pulse rounded bg-muted" />
            </div>

            <div className="flex h-10 w-10 shrink-0 animate-pulse items-center justify-center rounded-xl bg-muted">
              <div className="h-5 w-5 rounded bg-border" />
            </div>
          </div>

          <div className="mt-4 h-3 w-48 max-w-full animate-pulse rounded bg-muted" />
        </article>
      ))}
    </section>
  );
}
export function DashboardStatsSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between">
        <div className="h-11 w-11 rounded-xl bg-muted" />
        <div className="h-9 w-9 rounded-lg bg-muted" />
      </div>
      <div className="mt-5 h-4 w-32 rounded bg-muted" />
      <div className="mt-2 h-8 w-24 rounded bg-muted" />
      <div className="mt-3 h-3 w-40 rounded bg-muted" />
    </div>
  );
}
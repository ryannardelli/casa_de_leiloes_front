export function WalletTransactionsSkeleton() {
  return (
    <div className="divide-y divide-border animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 sm:px-5"
        >
          <div className="h-10 w-10 shrink-0 rounded-full bg-muted" />

          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-28 rounded bg-muted" />
            <div className="h-3 w-36 rounded bg-muted" />
          </div>

          <div className="flex shrink-0 flex-col items-end gap-2">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="h-3 w-16 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
export function AuditLotCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="relative">
        <div className="h-56 w-full animate-pulse bg-gray-200" />

        <div className="absolute left-3 top-3 h-7 w-24 animate-pulse rounded-full bg-gray-300" />

        <div className="absolute bottom-3 left-3 h-6 w-20 animate-pulse rounded-md bg-gray-300" />
      </div>

      <div className="space-y-4 p-5">
        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="space-y-2">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
    interface LotCardSkeletonProps {
    count?: number;
    }

    export function LotCardSkeleton({ count = 1 }: LotCardSkeletonProps) {
    return (
        <>
        {Array.from({ length: count }).map((_, index) => (
        <article
        key={index}
        className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
        <div className="relative aspect-[16/10] animate-pulse bg-muted">
        <div className="absolute left-3 top-3 h-7 w-24 rounded-lg bg-border" />
        <div className="absolute bottom-3 right-3 h-7 w-28 rounded-lg bg-border" />
        </div>

        <div className="space-y-4 p-5 animate-pulse">
            <div>
            <div className="h-6 w-3/4 rounded-md bg-muted" />

            <div className="mt-3 space-y-2">
                <div className="h-4 w-full rounded-md bg-muted" />
                <div className="h-4 w-2/3 rounded-md bg-muted" />
            </div>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
            <div className="h-3 w-20 rounded-md bg-border" />
            <div className="mt-2 h-7 w-36 rounded-md bg-border" />

            <div className="mt-4 flex items-center justify-between gap-3">
                <div className="h-4 w-20 rounded-md bg-border" />
                <div className="h-4 w-24 rounded-md bg-border" />
            </div>
            </div>
            <div className="h-12 w-full rounded-xl bg-muted" />
        </div>
        </article>
  ))}
</>
);
}
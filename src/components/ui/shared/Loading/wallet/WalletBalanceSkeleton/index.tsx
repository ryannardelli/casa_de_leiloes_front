export function WalletBalanceSkeleton() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-primary p-6 text-surface shadow-sm sm:p-8">
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />

      <div className="relative z-10 animate-pulse">
        <div className="flex items-center gap-2">
          <div className="h-[18px] w-[18px] rounded bg-white/20" />
          <div className="h-4 w-44 rounded bg-white/20" />
          <div className="h-4 w-4 rounded bg-white/20" />
        </div>

        <div className="mt-3 h-10 w-48 rounded-md bg-white/20 sm:h-11" />

        <div className="mt-2 h-4 w-64 max-w-full rounded bg-white/15" />

        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-2">
          <div>
            <div className="h-4 w-48 max-w-full rounded bg-white/20" />
            <div className="mt-2 h-7 w-36 rounded bg-white/20" />
          </div>

          <div>
            <div className="h-4 w-40 max-w-full rounded bg-white/20" />
            <div className="mt-2 h-7 w-32 rounded bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
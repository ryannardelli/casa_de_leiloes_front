import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, MoreHorizontal } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export function StatCard({
  label,
  value,
  change,
  icon: Icon,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
          <Icon size={21} />
        </div>

        <span className="rounded-lg bg-muted p-2 text-text-muted">
          <MoreHorizontal size={18} />
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-text-muted">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold tracking-tight">
        {value}
      </p>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
        <ArrowUpRight size={15} className="text-gold" />
        <span>{change}</span>
      </div>
    </article>
  );
}
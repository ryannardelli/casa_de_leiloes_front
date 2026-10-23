import {
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { UserProfile } from "../../../../../mocks/bidder/profile.mock";

interface ProfileSummaryProps {
  profile: UserProfile;
}

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  const roleLabels = {
    AUCTIONEER: "Leiloeiro",
    BIDDER: "Licitante",
  };

  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-gold">
          {initials}
        </div>

        <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>

        <p className="mt-1 text-sm text-text-muted">
          {profile.email}
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-accent">
          <ShieldCheck size={14} />
          {roleLabels[profile.role]}
        </span>
      </div>

      <div className="mt-6 space-y-4 border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-text-muted">
            <UserRound size={17} />
          </div>

          <div>
            <p className="text-xs text-text-muted">Tipo de conta</p>
            <p className="text-sm font-medium">
              {roleLabels[profile.role]}
            </p>
          </div>

          <CheckCircle2
            size={17}
            className="ml-auto text-accent"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-text-muted">
            <CalendarDays size={17} />
          </div>

          <div>
            <p className="text-xs text-text-muted">Membro desde</p>
            <p className="text-sm font-medium">
              {new Date(profile.createdAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
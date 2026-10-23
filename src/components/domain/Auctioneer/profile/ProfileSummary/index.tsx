import { CalendarDays, Mail, ShieldCheck, UserRound } from "lucide-react";
import type { UserProfile } from "../../../../../mocks/auctioneer/profile.mock";

interface ProfileSummaryProps {
  profile: UserProfile;
}

const roleLabels = {
  AUCTIONEER: "Leiloeiro",
  BIDDER: "Licitante",
};

export function ProfileSummary({ profile }: ProfileSummaryProps) {
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
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
          {initials}
        </div>

        <h2 className="text-lg font-bold text-text">
          {profile.name}
        </h2>

        <p className="mt-1 text-sm text-text-muted">
          {profile.email}
        </p>

        <span className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {roleLabels[profile.role]}
        </span>
      </div>

      <div className="my-6 border-t border-border" />

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Mail size={18} className="mt-0.5 text-text-muted" />

          <div>
            <p className="text-xs text-text-muted">
              E-mail cadastrado
            </p>
            <p className="break-all text-sm font-medium text-text">
              {profile.email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck
            size={18}
            className="mt-0.5 text-text-muted"
          />

          <div>
            <p className="text-xs text-text-muted">
              Tipo de conta
            </p>
            <p className="text-sm font-medium text-text">
              {roleLabels[profile.role]}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarDays
            size={18}
            className="mt-0.5 text-text-muted"
          />

          <div>
            <p className="text-xs text-text-muted">
              Membro desde
            </p>
            <p className="text-sm font-medium text-text">
              {new Date(profile.createdAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <UserRound size={18} className="mt-0.5 text-text-muted" />

          <div>
            <p className="text-xs text-text-muted">
              Identificador da conta
            </p>
            <p className="text-sm font-medium text-text">
              {profile.id}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
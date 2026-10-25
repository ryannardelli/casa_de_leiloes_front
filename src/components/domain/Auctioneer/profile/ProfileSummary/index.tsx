import {
  CalendarDays,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

interface ProfileSummaryProps {
  profile: {
    id: number;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    profile: {
      name: string;
      description: string;
      active: boolean;
    };
  };
}

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const formattedDate = new Date(profile.createdAt).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-col items-center border-b border-border bg-muted/30 px-6 py-8 text-center sm:py-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-surface bg-primary/10 text-2xl font-bold text-primary shadow-sm">
          {initials}
        </div>

        <h2 className="mt-4 text-xl font-bold tracking-tight text-text">
          {profile.name}
        </h2>

        <p className="mt-1 break-all text-sm text-text-muted">
          {profile.email}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
          <ShieldCheck size={14} />
          {profile.profile.name}
        </span>

        <p className="mt-3 max-w-md text-sm leading-6 text-text-muted">
          {profile.profile.description}
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <h3 className="mb-4 text-sm font-semibold text-text">
          Informações da conta
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Mail size={18} className="text-text-muted" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                E-mail cadastrado
              </p>
              <p className="mt-1 break-all text-sm font-medium text-text">
                {profile.email}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <ShieldCheck size={18} className="text-text-muted" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                Perfil de acesso
              </p>
              <p className="mt-1 text-sm font-medium text-text">
                {profile.profile.name}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <CalendarDays size={18} className="text-text-muted" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                Data de cadastro
              </p>
              <p className="mt-1 text-sm font-medium text-text">
                {formattedDate}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <UserRound size={18} className="text-text-muted" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                Identificador da conta
              </p>
              <p className="mt-1 text-sm font-medium text-text">
                #{profile.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

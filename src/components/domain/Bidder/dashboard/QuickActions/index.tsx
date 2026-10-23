import {
  Plus,
  Gavel,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    label: "Criar lote",
    description: "Cadastre uma nova obra",
    icon: Plus,
    path: "/dashboard/lots/new",
  },
  {
    label: "Leilões ativos",
    description: "Acompanhe os lances",
    icon: Gavel,
    path: "/dashboard/active-auctions",
  },
  {
    label: "Consultar resultados",
    description: "Veja os lotes encerrados",
    icon: Trophy,
    path: "/dashboard/results",
  },
];

export function QuickActions() {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="font-semibold">Ações rápidas</h2>

      <p className="mt-1 text-sm text-text-muted">
        Acesse as principais funcionalidades.
      </p>

      <div className="mt-5 space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.path}
              to={action.path}
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-muted"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                <Icon size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">
                  {action.label}
                </span>

                <span className="mt-1 block text-xs text-text-muted">
                  {action.description}
                </span>
              </span>

              <ArrowRight
                size={17}
                className="shrink-0 text-text-muted"
              />
            </Link>
          );
        })}
      </div>
    </article>
  );
}
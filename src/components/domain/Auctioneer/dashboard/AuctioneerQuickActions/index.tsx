import {
  Plus,
  Gavel,
  Package,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const actions = [
  {
    title: "Criar novo lote",
    description: "Cadastre uma nova obra para leilão.",
    icon: Plus,
    path: "/dashboard/lots/new",
  },
  {
    title: "Gerenciar lotes",
    description: "Edite e acompanhe seus lotes.",
    icon: Package,
    path: "/dashboard/lots",
  },
  {
    title: "Acompanhar leilões",
    description: "Consulte os leilões em andamento.",
    icon: Gavel,
    path: "/dashboard/active-auctions",
  },
  {
    title: "Ver resultados",
    description: "Confira os lotes encerrados.",
    icon: ChartNoAxesCombined,
    path: "/dashboard/results",
  },
];

export function AuctioneerQuickActions() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="font-semibold">Acesso rápido</h2>

      <p className="mt-1 text-sm text-text-muted">
        Atalhos para as principais tarefas.
      </p>

      <div className="mt-5 space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-accent transition-colors group-hover:bg-surface">
                <Icon size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">
                  {action.title}
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  {action.description}
                </p>
              </div>

              <ArrowRight
                size={17}
                className="shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
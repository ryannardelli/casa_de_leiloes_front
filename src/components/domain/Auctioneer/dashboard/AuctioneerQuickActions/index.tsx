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
    title: "Criar lote",
    description: "Cadastre uma nova obra para leilão.",
    icon: Plus,
    path: "/auctioneer/lots/new",
  },
  {
    title: "Meus lotes",
    description: "Gerencie suas obras e acompanhe os lotes cadastrados.",
    icon: Package,
    path: "/auctioneer/lots",
  },
  {
    title: "Leilões ativos",
    description: "Monitore os leilões em andamento e os lances recebidos.",
    icon: Gavel,
    path: "/auctioneer/active-auctions",
  },
  {
    title: "Resultados",
    description: "Consulte os leilões encerrados e seus resultados.",
    icon: ChartNoAxesCombined,
    path: "/auctioneer/results",
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
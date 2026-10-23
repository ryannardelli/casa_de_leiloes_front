import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Visão geral
        </h1>

        <p className="mt-2 text-sm text-text-muted">
          Acompanhe seus leilões e resultados em um só lugar.
        </p>
      </div>

      <Link
        to="/dashboard/lots/new"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-surface transition hover:opacity-90"
      >
        <Plus size={18} />
        Criar novo lote
      </Link>
    </header>
  );
}
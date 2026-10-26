import { Search } from "lucide-react";

interface LotEmptyStateProps {
  onClear: () => void;
}

export function LotEmptyState({ onClear }: LotEmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 text-center">
      <div className="mb-4 rounded-full bg-muted p-4 text-text-muted">
        <Search size={24} />
      </div>

      <h3 className="font-semibold">Nenhum lote encontrado</h3>

      <p className="mt-2 max-w-sm text-sm text-text-muted">
        Não encontramos lotes para essa categoria ou busca.
        Tente alterar os filtros.
      </p>

      <button
        onClick={onClear}
        className="mt-4 text-sm font-semibold text-accent hover:underline cursor-pointer"
      >
        Limpar filtros
      </button>
    </div>
  );
}
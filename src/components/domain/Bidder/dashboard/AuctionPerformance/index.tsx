import { TrendingUp } from "lucide-react";

const weeklyActivity = [
  { day: "Seg", height: "35%" },
  { day: "Ter", height: "55%" },
  { day: "Qua", height: "43%" },
  { day: "Qui", height: "76%" },
  { day: "Sex", height: "62%" },
  { day: "Sáb", height: "92%" },
  { day: "Dom", height: "68%" },
];

export function AuctionPerformance() {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-semibold">Desempenho dos leilões</h2>
          <p className="mt-1 text-sm text-text-muted">
            Acompanhamento dos resultados recentes
          </p>
        </div>

        <span className="rounded-lg border border-border px-3 py-2 text-xs text-text-muted">
          Últimos 7 dias
        </span>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-text-muted">Total arrecadado</p>
          <p className="mt-1 text-2xl font-bold">R$ 12.450</p>

          <p className="mt-2 flex items-center gap-1 text-xs text-gold">
            <TrendingUp size={14} />
            Evolução positiva
          </p>
        </div>

        <div>
          <p className="text-sm text-text-muted">Média por arremate</p>
          <p className="mt-1 text-2xl font-bold">R$ 1.562</p>
          <p className="mt-2 text-xs text-text-muted">
            No período selecionado
          </p>
        </div>
      </div>

      <div
        role="img"
        aria-label="Gráfico ilustrativo de atividade dos últimos sete dias"
        className="mt-7 flex h-36 items-end justify-between gap-2 border-b border-border pb-2 sm:gap-4"
      >
        {weeklyActivity.map((item, index) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div
              className={`w-full max-w-12 rounded-t-md ${
                index === 5 ? "bg-gold" : "bg-muted"
              }`}
              style={{ height: item.height }}
            />

            <span className="text-xs text-text-muted">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-text-muted">
        Dados ilustrativos. O gráfico deverá utilizar os dados reais da API.
      </p>
    </article>
  );
}
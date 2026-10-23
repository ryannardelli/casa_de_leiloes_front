import { TrendingUp } from "lucide-react";

const weeklyActivity = [
  { day: "Seg", bids: 18 },
  { day: "Ter", bids: 25 },
  { day: "Qua", bids: 14 },
  { day: "Qui", bids: 32 },
  { day: "Sex", bids: 28 },
  { day: "Sáb", bids: 42 },
  { day: "Dom", bids: 21 },
];

export function AuctioneerPerformance() {
  const maxBids = Math.max(...weeklyActivity.map((item) => item.bids));

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-semibold">Atividade dos leilões</h2>
          <p className="mt-1 text-sm text-text-muted">
            Lances recebidos durante a semana
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
          <TrendingUp size={20} />
        </div>
      </div>

      <div
        className="mt-8 flex h-48 items-end justify-between gap-3"
        role="img"
        aria-label="Gráfico ilustrativo de lances recebidos por dia da semana"
      >
        {weeklyActivity.map((item) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <span className="text-xs text-text-muted">
              {item.bids}
            </span>

            <div className="flex h-36 w-full items-end">
              <div
                className={`w-full rounded-t-md transition-all ${
                  item.day === "Sáb" ? "bg-gold" : "bg-muted"
                }`}
                style={{
                  height: `${(item.bids / maxBids) * 100}%`,
                }}
              />
            </div>

            <span className="text-xs text-text-muted">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-text-muted">
        Dados demonstrativos. Os valores reais serão carregados pela API.
      </p>
    </section>
  );
}
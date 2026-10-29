import { CalendarDays, Gavel, Package } from "lucide-react";
import { getStatusConfig } from "../../../../../../utils/statusConfig";

interface AuditLotDetailsProps {
  lot: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    startingPrice: string | number;
    currentPrice: string | number;
    finalPrice: string | number | null;
    minimumIncrement: string | number;
    status: string;
    startAt: string;
    endAt: string;
    winnerId: number | null;
    attributes?: {
      artist?: string;
      medium?: string;
      culture?: string;
      department?: string;
      objectDate?: string;
    };
  };
  totalBids?: number;
}

const formatCurrency = (value: string | number | null) => {
  if (value === null || value === undefined) {
    return "Não informado";
  }

  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const formatDate = (value?: string | null) => {
  if (!value || Number.isNaN(new Date(value).getTime())) {
    return "Não informado";
  }

  return new Date(value).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
};

export function AuditLotDetails({
  lot,
  totalBids = 0,
}: AuditLotDetailsProps) {;
  const currentStatus = getStatusConfig(lot.status);

  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-5 flex items-center gap-3">
        <Package size={20} className="text-accent" />
        <h2 className="text-lg font-bold text-text">Dados do lote</h2>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <img
          src={lot.imageUrl}
          alt={lot.title}
          className="h-48 w-full rounded-xl object-cover sm:w-56"
        />

        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Lote #{lot.id}
          </span>

          <h3 className="mt-2 text-xl font-bold text-text">
            {lot.title}
          </h3>

          <p className="mt-1 text-sm text-text-muted">
            {lot.attributes?.department ?? ""}
          </p>

          <p className="mt-3 text-sm leading-6 text-text-muted">
            {lot.description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-text-muted">Preço inicial</p>
              <p className="mt-1 font-semibold text-text">
                {formatCurrency(lot.startingPrice)}
              </p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Valor final</p>
              <p className="mt-1 font-semibold text-text">
                {formatCurrency(lot.finalPrice)}
              </p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Valor atual registrado</p>
              <p className="mt-1 font-semibold text-text">
                {formatCurrency(lot.currentPrice)}
              </p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Incremento mínimo</p>
              <p className="mt-1 font-semibold text-text">
                {formatCurrency(lot.minimumIncrement)}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm text-text-muted">
                <Gavel size={15} />
                Total de lances
              </p>
              <p className="mt-1 font-semibold text-text">
                {totalBids}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm text-text-muted">
                <CalendarDays size={15} />
                Encerramento
              </p>
              <p className="mt-1 text-sm font-semibold text-text">
                {formatDate(lot.endAt)}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-muted p-3">
            <p className="text-sm text-text-muted">Arrematante</p>
            <p className="mt-1 font-semibold text-text">
              {lot.winnerId !== null
                ? `Licitante #${lot.winnerId}`
                : "Não registrado"}
            </p>
          </div>

          <div className="mt-4 space-y-1 text-sm text-text-muted">
            <p>Artista: {lot.attributes?.artist ?? "Não informado"}</p>
            <p>Técnica: {lot.attributes?.medium ?? "Não informada"}</p>
            <p>Cultura: {lot.attributes?.culture ?? "Não informada"}</p>
            <p>Data da obra: {lot.attributes?.objectDate ?? "Não informada"}</p>
            <p>Início do leilão: {formatDate(lot.startAt)}</p>
            <p>
              Status: <span>{currentStatus.label}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CalendarDays, Gavel, Package } from "lucide-react";
import type { AuctionAudit } from "../../../../../../mocks/home/audit.mock";

interface AuditLotDetailsProps {
  lot: AuctionAudit["lot"];
}

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const formatDate = (value: string) =>
  new Date(value).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

export function AuditLotDetails({ lot }: AuditLotDetailsProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-5 flex items-center gap-3">
        <Package size={20} className="text-gray-600" />
        <h2 className="text-lg font-bold text-gray-900">Dados do lote</h2>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <img
          src={lot.imageUrl}
          alt={lot.title}
          className="h-48 w-full rounded-xl object-cover sm:w-56"
        />

        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Lote #{lot.id}
          </span>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            {lot.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">{lot.category}</p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Preço inicial</p>
              <p className="mt-1 font-semibold text-gray-900">
                {formatCurrency(lot.startingPrice)}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Valor final</p>
              <p className="mt-1 font-semibold text-emerald-700">
                {formatCurrency(lot.finalPrice)}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Gavel size={15} />
                Total de lances
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {lot.totalBids}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={15} />
                Encerramento
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                {formatDate(lot.endedAt)}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-gray-50 p-3">
            <p className="text-sm text-gray-500">Arrematante</p>
            <p className="mt-1 font-semibold text-gray-900">{lot.winner}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
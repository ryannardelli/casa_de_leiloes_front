import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import type { PublicLot } from "../../../../../../models/PublicLot";

interface AuditLotCardProps {
  lot: PublicLot;
}

export function AuditLotCard({ lot }: AuditLotCardProps) {
  return (
    <Link
      to={`/audit/${lot.id}/lots`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={lot.imageUrl}
          alt={lot.title}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
          <ShieldCheck size={14} />
          Auditoria pública
        </span>

        <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
          {lot.attributes?.department ?? "Sem categoria"}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
          {lot.title}
        </h2>

        <div>
          <p className="text-sm text-gray-500">Lance atual</p>

          <p className="text-2xl font-bold text-gray-900">
            {Number(
              Number(lot.currentPrice) > 0
                ? lot.currentPrice
                : lot.startingPrice
            ).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
          <span className="flex items-center gap-2 font-medium text-blue-600">
            Consultar auditoria
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
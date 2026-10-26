import { Clock3, Radio } from "lucide-react";
import { Link } from "react-router-dom";

interface LiveLotCardProps {
  lot: {
    id: number;
    title: string;
    imageUrl: string;
    currentPrice: string;
    startingPrice: string;
    attributes?: {
      department?: string;
    };
  };
}

export function LiveLotCard({ lot }: LiveLotCardProps) {
  return (
    <Link
      to={`/auctions/${lot.id}`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={lot.imageUrl}
          alt={lot.title}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white">
          <Radio size={14} />
          AO VIVO
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
            <Clock3 size={16} />
            Entrar na sala
          </span>
        </div>
      </div>
    </Link>
  );
}
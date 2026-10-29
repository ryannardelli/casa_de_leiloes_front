import { Gavel } from "lucide-react";
import type { LiveBid } from "../../../../../../models/Bid";

interface LiveBidHistoryProps {
  bids: LiveBid[];
}

export function LiveBidHistory({ bids }: LiveBidHistoryProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <Gavel size={20} className="text-gray-700" />
        <h3 className="text-lg font-bold text-gray-900">
          Histórico de lances
        </h3>
      </div>

      <div className="space-y-3">
        {bids.map((bid) => (
          <div
            key={bid.id}
            className={`flex items-center justify-between rounded-lg p-3 ${
              bid.isCurrentUser ? "bg-blue-50" : "bg-gray-50"
            }`}
          >
            <div>
              <p className="font-medium text-gray-900">
                {bid.bidderName}
                {bid.isCurrentUser && (
                  <span className="ml-2 text-xs font-semibold text-blue-600">
                    Você
                  </span>
                )}
              </p>

              <p className="text-xs text-gray-500">
                {new Date(bid.createdAt).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <p className="font-bold text-gray-900">
              {bid.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
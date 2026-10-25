import { useState } from "react";
import { Gavel } from "lucide-react";

interface LiveBidPanelProps {
  currentBid: number;
  minimumIncrement: number;
  onBid: (amount: number) => void;
}

export function LiveBidPanel({
  currentBid,
  minimumIncrement,
  onBid,
}: LiveBidPanelProps) {
  const minimumBid = currentBid + minimumIncrement;
  const [amount, setAmount] = useState(String(minimumBid));

  function handleBid() {
    const bidAmount = Number(amount);

    if (!Number.isFinite(bidAmount) || bidAmount < minimumBid) {
      return;
    }

    onBid(bidAmount);
    setAmount(String(bidAmount + minimumIncrement));
  }

  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-bold text-gray-900">
        Faça seu lance
      </h3>

      <p className="text-sm text-gray-500">
        Lance mínimo permitido:{" "}
        {minimumBid.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <input
        type="number"
        min={minimumBid}
        step={minimumIncrement}
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      <button
        type="button"
        onClick={handleBid}
        disabled={!Number.isFinite(Number(amount)) || Number(amount) < minimumBid}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Gavel size={18} />
        Enviar lance
      </button>
    </div>
  );
}
import { useEffect, useState } from "react";
import { Gavel } from "lucide-react";
import { useBids } from "../../../../../../hooks/useBids";
import { showMessage } from "../../../../../ui/shared/Feedback/ShowMessage";

interface LiveBidPanelProps {
  lotId: number;
  currentBid: number;
  minimumIncrement: number;
  startingPrice: number;
}

export function LiveBidPanel({
  lotId,
  currentBid,
  minimumIncrement,
  startingPrice,
}: LiveBidPanelProps) {
  const { stateBids, createBid } = useBids();

  const minimumBid =
  currentBid > 0
    ? currentBid + minimumIncrement
    : startingPrice;

  const [amount, setAmount] = useState(String(minimumBid));
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setAmount(String(minimumBid));
  }, [minimumBid]);

  async function handleBid() {
    const bidAmount = Number(amount);

    showMessage.dismiss();

    try {
      setSubmitting(true);

      const response = await createBid(lotId, bidAmount);

      showMessage.success(response.message);

      setAmount(String(bidAmount + minimumIncrement));
    } catch (error) {
      showMessage.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar lance.",
      );
    } finally {
      setSubmitting(false);
    }
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
        disabled={submitting || stateBids.loadingCreateBid}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      <button
        type="button"
        onClick={handleBid}
        disabled={
          submitting ||
          stateBids.loadingCreateBid ||
          !Number.isFinite(Number(amount)) ||
          Number(amount) < minimumBid
        }
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        <Gavel size={18} />
        {submitting ? "Enviando lance..." : "Enviar lance"}
      </button>
    </div>
  );
}

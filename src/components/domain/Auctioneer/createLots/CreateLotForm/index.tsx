import { useState, type FormEvent } from "react";
import { CalendarClock, CircleDollarSign, Save } from "lucide-react";
import type { Artwork } from "../../../../../models/AuctioneerLot";
import {
CreateLotSchema,
type CreateLotFormData,
} from "../../../../../schemas/AuctioneerLot/CreateLotForm";

export type CreateLotData = CreateLotFormData;

interface CreateLotFormProps {
artwork: Artwork | null;
onSubmit: (data: CreateLotData) => void | Promise<void>;
}

export function CreateLotForm({
artwork,
onSubmit,
}: CreateLotFormProps) {
const [startingPrice, setStartingPrice] = useState("");
const [minimumIncrement, setMinimumIncrement] = useState("250");
const [startAt, setStartAt] = useState("");
const [endAt, setEndAt] = useState("");
const [error, setError] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();
setError("");

if (!artwork) {
  setError("Selecione uma obra antes de criar o lote.");
  return;
}

const startDate = new Date(startAt);
const endDate = new Date(endAt);

if (
  !startAt ||
  !endAt ||
  Number.isNaN(startDate.getTime()) ||
  Number.isNaN(endDate.getTime())
) {
  setError("Informe datas de início e término válidas.");
  return;
}

if (startDate <= new Date() || endDate <= startDate) {
  setError(
    "O início deve ser futuro e o término deve ocorrer depois do início.",
  );
  return;
}

const result = CreateLotSchema.safeParse({
  externalItemId: String(artwork.externalItemId),
  startingPrice: Number(startingPrice),
  minimumIncrement: Number(minimumIncrement),
  startAt: startDate.toISOString(),
  endAt: endDate.toISOString(),
});

if (!result.success) {
  setError(result.error.issues[0].message);
  return;
}

try {
  setIsSubmitting(true);
  await onSubmit(result.data);
} catch (err: unknown) {
  setError(
    err instanceof Error
      ? err.message
      : "Não foi possível criar o lote.",
  );
} finally {
  setIsSubmitting(false);
}

}

const inputClassName =
"mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder focus";

return (
<form
   onSubmit={handleSubmit}
   className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
 >
<div>
<h2 className="text-lg font-semibold">2. Configure o leilão</h2>

    <p className="mt-1 text-sm leading-6 text-text-muted">
      Defina os valores e o período de participação.
    </p>
  </div>

  <div className="mt-6 space-y-5">
    <div>
      <label className="text-sm font-medium">Obra selecionada</label>

      <p className="mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-muted">
        {artwork?.title ?? "Selecione uma obra primeiro"}
      </p>
    </div>

    <div className="border-t border-border pt-5">
      <div className="flex items-center gap-2">
        <CircleDollarSign size={19} className="text-accent" />
        <h3 className="font-semibold">Valores do leilão</h3>
      </div>

      <p className="mt-1 text-xs leading-5 text-text-muted">
        Valores em reais. Os valores serão enviados conforme o contrato da API.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="starting-price" className="text-sm font-medium">
            Preço inicial (R$)
          </label>

          <input
            id="starting-price"
            type="number"
            min="0.01"
            step="0.01"
            required
            value={startingPrice}
            onChange={(event) => setStartingPrice(event.target.value)}
            placeholder="5000"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="minimum-increment"
            className="text-sm font-medium"
          >
            Incremento mínimo (R$)
          </label>

          <input
            id="minimum-increment"
            type="number"
            min="0.01"
            step="0.01"
            required
            value={minimumIncrement}
            onChange={(event) =>
              setMinimumIncrement(event.target.value)
            }
            className={inputClassName}
          />
        </div>
      </div>
    </div>

    <div className="border-t border-border pt-5">
      <div className="flex items-center gap-2">
        <CalendarClock size={19} className="text-accent" />
        <h3 className="font-semibold">Período do leilão</h3>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="start-at" className="text-sm font-medium">
            Data e horário de início
          </label>

          <input
            id="start-at"
            type="datetime-local"
            required
            value={startAt}
            onChange={(event) => setStartAt(event.target.value)}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="end-at" className="text-sm font-medium">
            Data e horário de término
          </label>

          <input
            id="end-at"
            type="datetime-local"
            required
            value={endAt}
            onChange={(event) => setEndAt(event.target.value)}
            className={inputClassName}
          />
        </div>
      </div>
    </div>

    {error && (
      <p
        role="alert"
        className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
      >
        {error}
      </p>
    )}

    <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
      <button
        type="button"
        disabled={isSubmitting}
        onClick={() => window.history.back()}
        className="cursor-pointer rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
      >
        Cancelar
      </button>

      <button
        type="submit"
        disabled={!artwork || isSubmitting}
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:text-background"
      >
        <Save size={17} />
        {isSubmitting ? "Criando lote..." : "Criar lote"}
      </button>
    </div>
  </div>
</form>

);
}
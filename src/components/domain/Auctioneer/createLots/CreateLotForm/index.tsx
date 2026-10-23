import { useState, type FormEvent } from "react";
import { CalendarClock, CircleDollarSign, Save } from "lucide-react";
import type { Artwork } from "../../../../../mocks/auctioneer/artworks.mock";

export interface CreateLotData {
  artworkId: string;
  title: string;
  description: string;
  startingPrice: number;
  minimumPrice: number;
  minimumIncrement: number;
  startsAt: string;
  endsAt: string;
}

interface CreateLotFormProps {
  artwork: Artwork | null;
  onSubmit: (data: CreateLotData) => void;
}

export function CreateLotForm({
  artwork,
  onSubmit,
}: CreateLotFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [minimumIncrement, setMinimumIncrement] = useState("50");
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!artwork) {
      setError("Selecione uma obra antes de criar o lote.");
      return;
    }

    const initial = Number(startingPrice);
    const minimum = Number(minimumPrice);
    const increment = Number(minimumIncrement);

    if (
      !Number.isFinite(initial) ||
      !Number.isFinite(minimum) ||
      !Number.isFinite(increment) ||
      initial <= 0 ||
      minimum < 0 ||
      increment <= 0
    ) {
      setError("Informe valores monetários válidos.");
      return;
    }

    if (minimum > 0 && minimum < initial) {
      setError(
        "O preço mínimo de venda não pode ser inferior ao preço inicial.",
      );
      return;
    }

    if (!startsAt || !endsAt) {
      setError("Informe a data e o horário de início e término.");
      return;
    }

    const startDate = new Date(startsAt);
    const endDate = new Date(endsAt);

    if (
      Number.isNaN(startDate.getTime()) ||
      Number.isNaN(endDate.getTime()) ||
      startDate <= new Date() ||
      endDate <= startDate
    ) {
      setError(
        "O início deve ser futuro e o término deve ocorrer depois do início.",
      );
      return;
    }

    onSubmit({
      artworkId: artwork.id,
      title: title.trim() || artwork.title,
      description: description.trim(),
      startingPrice: initial,
      minimumPrice: minimum,
      minimumIncrement: increment,
      startsAt,
      endsAt,
    });
  }

  const inputClassName =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-accent";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
    >
      <div>
        <h2 className="text-lg font-semibold">2. Configure o leilão</h2>

        <p className="mt-1 text-sm leading-6 text-text-muted">
          Defina os detalhes, os valores e o período de participação.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="lot-title" className="text-sm font-medium">
            Título do lote
          </label>

          <input
            id="lot-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={artwork?.title ?? "Selecione uma obra primeiro"}
            maxLength={120}
            className={inputClassName}
          />

          <p className="mt-1 text-xs text-text-muted">
            Se não preencher, será utilizado o título da obra selecionada.
          </p>
        </div>

        <div>
          <label htmlFor="lot-description" className="text-sm font-medium">
            Descrição
          </label>

          <textarea
            id="lot-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Adicione informações complementares sobre o lote..."
            rows={4}
            maxLength={2000}
            className={`${inputClassName} resize-y`}
          />
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex items-center gap-2">
            <CircleDollarSign size={19} className="text-accent" />
            <h3 className="font-semibold">Valores do leilão</h3>
          </div>

          <p className="mt-1 text-xs leading-5 text-text-muted">
            Valores ilustrativos em reais. Este projeto utiliza lances e
            transações simulados.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="starting-price"
                className="text-sm font-medium"
              >
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
                placeholder="1500.00"
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="minimum-price" className="text-sm font-medium">
                Preço mínimo (R$)
              </label>

              <input
                id="minimum-price"
                type="number"
                min="0"
                step="0.01"
                required
                value={minimumPrice}
                onChange={(event) => setMinimumPrice(event.target.value)}
                placeholder="2000.00"
                className={inputClassName}
              />

              <p className="mt-1 text-xs text-text-muted">
                Informe 0 se não houver reserva.
              </p>
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
              <label htmlFor="starts-at" className="text-sm font-medium">
                Data e horário de início
              </label>

              <input
                id="starts-at"
                type="datetime-local"
                required
                value={startsAt}
                onChange={(event) => setStartsAt(event.target.value)}
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="ends-at" className="text-sm font-medium">
                Data e horário de término
              </label>

              <input
                id="ends-at"
                type="datetime-local"
                required
                value={endsAt}
                onChange={(event) => setEndsAt(event.target.value)}
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
            onClick={() => window.history.back()}
            className="rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:bg-muted"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={!artwork}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:text-background"
          >
            <Save size={17} />
            Criar lote
          </button>
        </div>
      </div>
    </form>
  );
}
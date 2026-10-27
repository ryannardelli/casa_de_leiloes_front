import type { PublicLot } from "../../../../../../models/PublicLot";

interface LiveLotDetailsProps {
  lot: PublicLot;
}

export function LiveLotDetails({ lot }: LiveLotDetailsProps) {
  const currentPrice = Number(lot.currentPrice);
  const displayedPrice =
    currentPrice > 0 ? currentPrice : Number(lot.startingPrice);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-gray-50 p-4 sm:p-6">
        <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl bg-white p-3 sm:min-h-[420px] sm:p-6">
          <img
            src={lot.imageUrl}
            alt={lot.title}
            className="max-h-[520px] w-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-6 p-5 sm:p-7">
        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {lot.attributes?.department ?? "Sem categoria"}
          </span>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            {lot.title}
          </h2>

          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            {lot.description}
          </p>
        </div>

        {(lot.attributes?.artist ||
          lot.attributes?.medium ||
          lot.attributes?.objectDate ||
          lot.attributes?.culture) && (
          <div className="grid grid-cols-1 gap-4 rounded-xl bg-gray-50 p-4 sm:grid-cols-2 sm:p-5">
            {lot.attributes?.artist && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Artista
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {lot.attributes.artist}
                </p>
              </div>
            )}

            {lot.attributes?.medium && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Técnica / material
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {lot.attributes.medium}
                </p>
              </div>
            )}

            {lot.attributes?.objectDate && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Data da obra
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {lot.attributes.objectDate}
                </p>
              </div>
            )}

            {lot.attributes?.culture && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Cultura / origem
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {lot.attributes.culture}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              {currentPrice > 0 ? "Lance atual" : "Lance inicial"}
            </p>

            <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {displayedPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
          <div>
            <p className="text-sm text-gray-500">Incremento mínimo</p>
            <p className="mt-1 font-semibold text-gray-900">
              {Number(lot.minimumIncrement).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
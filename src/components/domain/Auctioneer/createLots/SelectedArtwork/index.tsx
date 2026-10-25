import { CheckCircle2, Image as ImageIcon } from "lucide-react";
import type { Artwork } from "../../../../../models/AuctioneerLot";

interface SelectedArtworkProps {
artwork: Artwork | null;
}

export function SelectedArtwork({ artwork }: SelectedArtworkProps) {
return (
<section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg font-semibold">Obra selecionada</h2>

    {artwork && (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
        <CheckCircle2 size={14} />
        Selecionada
      </span>
    )}
  </div>

  <p className="mt-1 text-sm text-text-muted">
    Confira os dados da obra antes de configurar o lote.
  </p>

  {artwork ? (
    <div className="mt-5 overflow-hidden rounded-xl border border-border">
      <div className="flex h-56 items-center justify-center bg-muted/40 p-3">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 p-4">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-text">
            {artwork.title}
          </h3>

          <p className="mt-1 text-sm text-text-muted">
            {artwork.artist || "Artista não informado"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
          <div className="min-w-0">
            <p className="text-xs text-text-muted">Data</p>
            <p className="mt-1 break-words text-sm font-medium">
              {artwork.objectDate || "Não informada"}
            </p>
          </div>

          <div className="min-w-0">
            <p className="text-xs text-text-muted">Técnica</p>
            <p className="mt-1 break-words text-sm font-medium">
              {artwork.medium || "Não informada"}
            </p>
          </div>

          <div className="col-span-2 min-w-0">
            <p className="text-xs text-text-muted">Departamento</p>
            <p className="mt-1 break-words text-sm font-medium">
              {artwork.department || "Não informado"}
            </p>
          </div>

          {artwork.category && (
            <div className="col-span-2 min-w-0">
              <p className="text-xs text-text-muted">Categoria</p>
              <p className="mt-1 break-words text-sm font-medium">
                {artwork.category}
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-border pt-3">
          <p className="text-xs text-text-muted">
            Identificador da coleção
          </p>
          <p className="mt-1 font-mono text-sm">
            {artwork.externalItemId}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-5 flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background p-5 text-center">
      <ImageIcon size={30} className="text-text-muted" />

      <p className="mt-3 font-medium">Nenhuma obra selecionada</p>

      <p className="mt-1 text-sm text-text-muted">
        Selecione uma obra na lista para visualizar seus detalhes.
      </p>
    </div>
  )}

  <p className="mt-4 text-xs leading-5 text-text-muted">
    A seleção de uma obra de referência não comprova sua propriedade,
    autenticidade ou disponibilidade para venda.
  </p>
</section>

);
}
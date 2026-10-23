import { CheckCircle2, Image as ImageIcon } from "lucide-react";
import type { Artwork } from "../../../../../mocks/auctioneer/artworks.mock";

interface SelectedArtworkProps {
  artwork: Artwork | null;
}

export function SelectedArtwork({ artwork }: SelectedArtworkProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold">Obra selecionada</h2>

      <p className="mt-1 text-sm text-text-muted">
        Confira os dados da obra antes de configurar o lote.
      </p>

      {artwork ? (
        <div className="mt-5 overflow-hidden rounded-xl border border-border">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="h-48 w-full bg-muted object-cover"
          />

          <div className="space-y-3 p-4">
            <div className="flex items-start gap-2">
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-accent"
              />

              <div>
                <h3 className="font-semibold">{artwork.title}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  {artwork.artist}
                </p>
              </div>
            </div>

            <div className="space-y-2 border-t border-border pt-3 text-sm">
              <p>
                <span className="text-text-muted">Categoria: </span>
                {artwork.department}
              </p>

              <p>
                <span className="text-text-muted">Data: </span>
                {artwork.date}
              </p>

              <p>
                <span className="text-text-muted">Material: </span>
                {artwork.medium}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex min-h-52 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background p-5 text-center">
          <ImageIcon size={30} className="text-text-muted" />

          <p className="mt-3 font-medium">Nenhuma obra selecionada</p>

          <p className="mt-1 text-sm text-text-muted">
            Selecione uma obra na lista para continuar.
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
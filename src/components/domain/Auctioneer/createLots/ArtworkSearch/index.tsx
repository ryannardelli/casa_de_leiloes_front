import { Search, Image as ImageIcon } from "lucide-react";
import type { Artwork } from "../../../../../mocks/auctioneer/artworks.mock";
import { usePublicCollection } from "../../../../../hooks/usePublicCollection";
import { ArtworkCardSkeleton } from "../../../../ui/shared/Loading/ArtworkCardSkeleton";

interface ArtworkSearchProps {
  artworks?: Artwork[];
  search: string;
  selectedArtworkId: string | number | null;
  onSearchChange: (value: string) => void;
  onSelect: (artwork: any) => void;
}

export function ArtworkSearch({
  search,
  selectedArtworkId,
  onSearchChange,
  onSelect,
}: ArtworkSearchProps) {
  const { statePublicCollection } = usePublicCollection();
  const featuredWorks = statePublicCollection?.featuredWorks || [];

  const loading = statePublicCollection.loadingCollection;

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div>
        <h2 className="text-lg font-semibold">1. Escolha uma obra</h2>

        <p className="mt-1 text-sm leading-6 text-text-muted">
          Pesquise no acervo de referência para selecionar a obra do seu lote.
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-background px-4">
        <Search size={19} className="shrink-0 text-text-muted" />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por título, artista ou categoria..."
          aria-label="Buscar obras"
          className="w-full bg-transparent py-3.5 text-sm text-text outline-none placeholder:text-text-muted"
        />
      </div>

      {loading ? (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ArtworkCardSkeleton key={index} />
          ))}
        </div>
      ) : featuredWorks.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featuredWorks.map((artwork: any) => {
            const artworkId = artwork.externalItemId ?? artwork.id;
            const isSelected = String(selectedArtworkId) === String(artworkId);

            return (
              <button
                key={artworkId}
                type="button"
                onClick={() => onSelect(artwork)}
                aria-pressed={isSelected}
                className={`overflow-hidden rounded-xl border text-left transition ${
                  isSelected
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/50 flex items-center justify-center p-2">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="h-full w-full object-contain transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="space-y-2 p-4">
                  {artwork.category && (
                    <span className="inline-flex rounded-md bg-muted px-2 py-1 text-xs font-medium text-text-muted">
                      {artwork.category}
                    </span>
                  )}

                  <h3 className="line-clamp-2 font-semibold">
                    {artwork.title}
                  </h3>

                  <p className="text-sm text-text-muted">
                    {artwork.artist || "Artista desconhecido"}
                  </p>

                  {(artwork.date || artwork.medium) && (
                    <p className="text-xs text-text-muted">
                      {[artwork.date, artwork.medium].filter(Boolean).join(" · ")}
                    </p>
                  )}

                  <div
                    className={`pt-2 text-sm font-semibold ${
                      isSelected ? "text-accent" : "text-text-muted"
                    }`}
                  >
                    {isSelected ? "Obra selecionada ✓" : "Selecionar obra"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-5 flex flex-col items-center rounded-xl border border-dashed border-border px-5 py-10 text-center">
          <ImageIcon size={28} className="text-text-muted" />

          <h3 className="mt-3 font-semibold">Nenhuma obra encontrada</h3>

          <p className="mt-1 text-sm text-text-muted">
            Tente pesquisar por outro título, artista ou categoria.
          </p>
        </div>
      )}
    </section>
  );
}
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Artwork } from "../../../mocks/auctioneer/artworks.mock";
import { usePublicCollection } from "../../../hooks/usePublicCollection";
import {
  CreateLotForm,
  type CreateLotData,
} from "../../../components/domain/Auctioneer/createLots/CreateLotForm";
import { CreateLotHeader } from "../../../components/domain/Auctioneer/createLots/CreateLotHeader";
import { ArtworkSearch } from "../../../components/domain/Auctioneer/createLots/ArtworkSearch";
import { SelectedArtwork } from "../../../components/domain/Auctioneer/createLots/SelectedArtwork";

export function CreateLot() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const { statePublicCollection } = usePublicCollection();

  const featuredWorks = statePublicCollection?.featuredWorks ?? [];
  console.log(featuredWorks);

  const filteredArtworks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return featuredWorks;
    }

    return featuredWorks.filter((artwork) =>
      [
        artwork.title,
        artwork.artist,
        artwork.department,
        artwork.medium,
      ].some((value) =>
        String(value ?? "").toLowerCase().includes(normalizedSearch),
      ),
    );
  }, [search, featuredWorks]);

  function handleCreateLot(data: CreateLotData) {
    console.log("Dados do lote:", data);

    window.alert(
      "Validação concluída! Conecte a API para salvar o lote permanentemente.",
    );

    // Após integrar o POST ao backend, navegue para a lista de lotes:
    // navigate("/dashboard/lots");
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <CreateLotHeader />

        <ArtworkSearch
          artworks={filteredArtworks}
          search={search}
          selectedArtworkId={
            selectedArtwork?.externalItemId ?? selectedArtwork?.id ?? null
          }
          onSearchChange={setSearch}
          onSelect={setSelectedArtwork}
        />

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <CreateLotForm
            artwork={selectedArtwork}
            onSubmit={handleCreateLot}
          />

          <div className="lg:sticky lg:top-6">
            <SelectedArtwork artwork={selectedArtwork} />
          </div>
        </div>
      </div>
    </main>
  );
}
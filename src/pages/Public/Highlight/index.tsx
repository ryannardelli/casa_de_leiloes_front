import { HighlightCard } from "../../../components/domain/Home/HighLight/HighlightCard";
import { usePublicCollection } from "../../../hooks/usePublicCollection";

export function Highlight() {
  const { statePublicCollection } = usePublicCollection();
  const featuredWorks = statePublicCollection.featuredWorks;

  return (
    <main className="min-h-screen bg-background px-5 py-10 text-text sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Obras em destaque
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
                Explore peças selecionadas de diferentes épocas,
                artistas e coleções. Descubra a história por trás de
                cada obra.
              </p>
            </div>
          </div>
        </header>

        <section
          aria-label="Obras de arte em destaque"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredWorks.map((item) => (
            <HighlightCard key={item.externalItemId} item={item} />
          ))}
        </section>
      </div>
    </main>
  );
}

import { usePublicCollection } from "../../../../hooks/usePublicCollection";

import { BannerHighlight } from "../BannerHighlight";

import { ProductCard } from "../ProductCard";

export function FeaturedLots() {
    const { statePublicCollection } = usePublicCollection();
    const { featuredJapanese, loadingCollection } = statePublicCollection;

    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <BannerHighlight />

            {loadingCollection ? (
                <p className="py-8 text-center">Carregando obras...</p>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {featuredJapanese.map((work) => (
                        <ProductCard
                            key={work.id}
                            title={work.title}
                            category={work.category || "Obra de arte"}
                            imageUrl={work.image}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
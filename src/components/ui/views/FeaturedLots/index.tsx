import { BannerHighlight } from "../BannerHighlight";
import { ProductCard } from "../ProductCard";

const products = [
  {
    id: 1,
    title: "Pintura clássica em moldura dourada",
    category: "Arte e pinturas",
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
    currentBid: 850,
  },
  {
    id: 2,
    title: "Poltrona vintage em madeira entalhada",
    category: "Mobiliário antigo",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657",
    currentBid: 1200,
  },
  {
    id: 3,
    title: "Relógio clássico de coleção",
    category: "Relógios antigos",
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    currentBid: 620,
  },
  {
    id: 4,
    title: "Peça decorativa de porcelana",
    category: "Antiguidades",
    imageUrl: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d",
    currentBid: 430,
  },
];

export function FeaturedLots() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
       <BannerHighlight />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            imageUrl={product.imageUrl}
            currentBid={product.currentBid}
          />
        ))}
      </div>
    </section>
  );
}

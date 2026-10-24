import { Heart } from "lucide-react";

type ProductCardProps = {
  title: string;
  category: string;
  imageUrl: string;
  currentBid?: number;
};

export function ProductCard({
  title,
  category,
  imageUrl,
  currentBid,
}: ProductCardProps) {

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button
          type="button"
          aria-label={`Adicionar ${title} aos favoritos`}
          className="absolute left-3 top-3 rounded-full bg-surface/90 p-2 text-primary shadow-md transition-all hover:bg-surface hover:text-accent"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-1 p-4">
        <span className="text-xs font-medium text-text-muted">
          {category}
        </span>

        <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold text-text">
          {title}
        </h3>

        {currentBid != null && (
          <div className="mt-2 flex items-baseline justify-between border-t border-border pt-2">
            <span className="text-xs text-text-muted">
              Lance atual
            </span>

            <span className="text-sm font-extrabold text-primary">
              {currentBid.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

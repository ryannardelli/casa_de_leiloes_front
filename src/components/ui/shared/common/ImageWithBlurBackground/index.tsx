interface ImageWithBlurBackgroundProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ImageWithBlurBackground({
  src,
  alt,
  aspectRatio = "aspect-[16/10]",
  className = "",
  children,
}: ImageWithBlurBackgroundProps) {
  return (
    <div className={`relative overflow-hidden bg-muted flex items-center justify-center ${aspectRatio} ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center blur-xl opacity-40 scale-110 pointer-events-none"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Imagem principal sem cortes */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />

      {children}
    </div>
  );
}
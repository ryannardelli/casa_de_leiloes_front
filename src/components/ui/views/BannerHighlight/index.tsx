import { ChevronRight } from 'lucide-react';

export function BannerHighlight() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center border border-gold text-gold font-bold">
            ★
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Destaques desta semana
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              Coleção de ícones da fotografia japonesa
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-1.5 flex-1 md:flex-initial">
            <div className="h-1.5 w-16 bg-accent rounded-full"></div>
            <div className="h-1.5 w-16 bg-border rounded-full"></div>
            <div className="h-1.5 w-16 bg-border rounded-full"></div>
            <div className="h-1.5 w-16 bg-border rounded-full"></div>
          </div>
          <button className="text-accent hover:text-primary transition-colors p-1">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
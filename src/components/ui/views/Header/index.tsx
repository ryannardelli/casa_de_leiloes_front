import { Search, Heart, Globe, ChevronDown, Crown } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-surface border-b border-border text-text">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-lg font-extrabold text-gold">
                <Crown />
            </div>

            <div className="flex flex-col">
                <span className="text-xl font-extrabold leading-tight text-primary">
                    Arremata
                </span>
            </div>
            </a>

          <button className="hidden md:flex items-center gap-1.5 font-medium text-sm text-text hover:text-accent transition-colors">
            Categorias
            <ChevronDown className="w-4 h-4 text-text-muted" />
          </button>
        </div>

        <div className="flex-1 max-w-xl relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-3 text-text-muted" />
            <input
              type="text"
              placeholder="Procurar por marca, modelo, artista..."
              className="w-full bg-muted text-text placeholder:text-text-muted text-sm rounded-md pl-9 pr-4 py-2 border border-transparent focus:border-accent focus:bg-surface focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm font-medium">
          <a href="#" className="hidden lg:block text-text hover:text-accent transition-colors">
            Como funciona?
          </a>
          <a href="#" className="hidden lg:block text-text hover:text-accent transition-colors">
            Ajuda
          </a>

          <button className="p-1.5 text-text hover:text-accent transition-colors rounded-full hover:bg-muted">
            <Heart className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-1 p-1.5 text-text hover:text-accent transition-colors">
            <Globe className="w-5 h-5" />
            <span className="text-xs font-semibold">PT</span>
          </button>

          <button className="bg-accent hover:opacity-90 text-surface font-semibold px-4 py-2 rounded-md transition-all shadow-sm cursor-pointer">
            Iniciar sessão
          </button>
        </div>

      </div>
    </header>
  );
}
import { Clock, Flame, Landmark, Palette, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: "recentes", label: "Recém-adicionados", icon: Clock },
  { id: "popular", label: "Mais disputados", icon: TrendingUp },
  { id: "destaques", label: "Destaques", icon: Flame },
  { id: "pinturas", label: "Pinturas", icon: Palette },
  { id: "esculturas", label: "Esculturas", icon: Landmark },
];

export function CategoryBar() {
  const [activeTab, setActiveTab] = useState('semana');

  return (
    <div className="flex justify-center w-full bg-surface border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto scrollbar-none">
        <div className="flex gap-2 py-3">
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1.5 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-3 ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-text-muted hover:text-text cursor-pointer'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-text-muted'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import { Flame, House, Radio, ShieldCheck } from 'lucide-react';
import { RouterLinks } from '../../shared/Links/RouterLinks';
import { useLocation } from 'react-router-dom';

const categories = [
  { id: "home", label: "Início", icon: House, router: "/" },
  { id: "auditoria", label: "Auditoria pública", icon: ShieldCheck, router: "/audit" },
  { id: "salas-ao-vivo", label: "Salas ao vivo", icon: Radio, router: "/auctions" },
  { id: "destaques", label: "Destaques", icon: Flame, router: "/destaques" },
];

export function CategoryBar() {
  const location = useLocation();

  return (
    <div className="flex justify-center w-full bg-surface border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto scrollbar-none">
        <div className="flex gap-2 py-3">
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.router;
            
            return (
              <RouterLinks
                href={item.router}
                key={item.id}
                className={`flex flex-col items-center gap-1.5 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-3 ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-text-muted hover:text-text cursor-pointer'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-text-muted'}`} />
                <span>{item.label}</span>
              </RouterLinks>
            );
          })}
        </div>
      </div>
    </div>
  );
}
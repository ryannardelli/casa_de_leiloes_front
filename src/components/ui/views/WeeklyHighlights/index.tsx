import {
  ArrowRight,
  Clock3,
  Flame,
  Gem,
  Star,
} from "lucide-react";

const highlights = [
  {
    id: 1,
    badge: "Destaque da semana",
    title: "Arte e pinturas",
    description: "Obras que atravessaram gerações.",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
    icon: Star,
    href: "#lotes",
  },
  {
    id: 2,
    badge: "Mais disputados",
    title: "Peças cobiçadas",
    description: "Descubra lotes que despertam interesse.",
    imageUrl:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    icon: Flame,
    href: "#lotes",
  },
  {
    id: 3,
    badge: "Novidades",
    title: "Novas raridades",
    description: "Conheça os itens recém-chegados.",
    imageUrl:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d",
    icon: Gem,
    href: "#lotes",
  },
];

export function WeeklyHighlights() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Curadoria Arremata
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Escolhas da semana
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-text-muted">
              Descubra antiguidades selecionadas, peças cobiçadas e
              novidades que merecem sua atenção.
            </p>
          </div>

          <a
            href="#lotes"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
          >
            Explorar todos os lotes
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group relative isolate min-h-[340px] overflow-hidden rounded-2xl bg-primary sm:min-h-[390px]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/55 to-primary/5" />

                <div className="flex h-full min-h-[340px] flex-col items-start justify-between p-6 sm:min-h-[390px] sm:p-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary/70 px-3 py-2 text-xs font-semibold text-background backdrop-blur-sm">
                    <Icon size={15} className="text-gold" />
                    {item.badge}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold text-background sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-background/75">
                      {item.description}
                    </p>

                    <a
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-background"
                    >
                      Descobrir seleção
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-text-muted">
          <Clock3 size={15} />
          <span>
            Seleções atualizadas conforme a curadoria e a atividade dos leilões.
          </span>
        </div>
      </div>
    </section>
  );
}

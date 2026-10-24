import {
    ArrowRight,
    Clock3,
    Flame,
    Gem,
    Star,
} from "lucide-react";
import { usePublicCollection } from "../../../../hooks/usePublicCollection";

const highlights = [
    {
        id: 1,
        badge: "Destaque da semana",
        title: "Obras selecionadas",
        description: "Obras de arte que atravessaram gerações.",
        icon: Star,
        href: "#lotes",
    },
    {
        id: 2,
        badge: "Arte e história",
        title: "Peças históricas",
        description: "Descubra obras com histórias únicas.",
        icon: Flame,
        href: "#lotes",
    },
    {
        id: 3,
        badge: "Nossa curadoria",
        title: "Novas descobertas",
        description: "Explore detalhes e expressões artísticas.",
        icon: Gem,
        href: "#lotes",
    },
];

export function WeeklyHighlights() {
    const { statePublicCollection } = usePublicCollection();
    const { curatedWorks } = statePublicCollection;

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
                            Descubra obras selecionadas e peças que merecem sua atenção.
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
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        const work = curatedWorks[index];

                        if (!work) return null;

                        return (
                            <article
                                key={work.id}
                                className="group relative isolate min-h-[340px] overflow-hidden rounded-2xl bg-primary sm:min-h-[390px]"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
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
                                            {work.title}
                                        </h3>

                                        <p className="mt-2 max-w-xs text-sm leading-6 text-background/75">
                                            {work.artist || work.category || item.description}
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
                        Obras apresentadas a partir da curadoria disponível.
                    </span>
                </div>
            </div>
        </section>
    );
}
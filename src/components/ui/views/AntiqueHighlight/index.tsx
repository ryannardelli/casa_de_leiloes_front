import { ArrowUpRight, Sparkles } from "lucide-react";
import { usePublicCollection } from "../../../../hooks/usePublicCollection";

export function AntiqueHighlight() {
    const { statePublicCollection } = usePublicCollection();
    const { curatedWorks } = statePublicCollection;

    const work = curatedWorks[0];

    return (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-2">
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                    <span className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        <Sparkles size={16} />
                        Peças com história
                    </span>

                    <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                        O passado guarda tesouros extraordinários.
                    </h2>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-text-muted sm:text-base">
                        Explore uma curadoria de antiguidades, obras de arte e objetos
                        raros que atravessaram gerações. Encontre peças que merecem
                        fazer parte da sua história.
                    </p>

                    <a
                        href="#lotes"
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        Explorar coleção
                        <ArrowUpRight size={18} />
                    </a>

                    <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                        <span className="h-10 w-1 rounded-full bg-gold" />
                        <p className="text-xs leading-5 text-text-muted">
                            Cada peça carrega uma história.
                            <br />
                            Descubra a próxima a fazer parte da sua.
                        </p>
                    </div>
                </div>

                <div className="relative min-h-72 bg-muted sm:min-h-96">
                {work ? (
                    <>
                        <img
                            src={work.image}
                            alt={work.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/30 bg-primary/85 p-5 text-white backdrop-blur-sm">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                                Nossa curadoria
                            </span>

                            <p className="mt-2 text-xl font-semibold">
                                {work.title}
                            </p>

                            {work.artist && (
                                <p className="mt-1 text-sm text-white/80">
                                    {work.artist}
                                </p>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-text-muted">
                        Nenhuma obra disponível no momento.
                    </div>
                )}
            </div>
            </div>
        </section>
    );
}
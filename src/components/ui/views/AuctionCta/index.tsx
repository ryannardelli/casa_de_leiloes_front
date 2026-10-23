import { ArrowRight, Gavel, Sparkles } from "lucide-react";

export function AuctionCta() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-primary px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-gold/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-12 h-52 w-52 rounded-full border border-gold/20"
        />

        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <Sparkles size={14} />
              Sua próxima descoberta começa aqui
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-background sm:text-4xl lg:text-5xl">
              Existem peças únicas.
              <span className="mt-1 block text-gold">
                E elas podem ser suas.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-background/75 sm:text-base">
              Participe dos nossos leilões, descubra antiguidades
              extraordinárias e dispute peças que merecem um lugar especial
              na sua coleção.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lotes"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-[#d9b56f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                Explorar leilões
                <ArrowRight size={18} />
              </a>

              <a
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/30 px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                Criar minha conta
              </a>
            </div>
          </div>

          <div className="hidden h-40 w-40 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold md:flex lg:h-48 lg:w-48">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-gold/30 lg:h-40 lg:w-40">
              <Gavel size={64} strokeWidth={1.1} />
            </div>
          </div>
        </div>

        <div className="relative mt-10 border-t border-background/15 pt-5">
          <p className="text-xs text-background/60">
            Descubra. Dispute. Arremate. Preserve histórias.
          </p>
        </div>
      </div>
    </section>
  );
}

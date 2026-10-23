import {
  ArrowUpRight,
  Gavel,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  explorar: [
    { label: "Todos os lotes", href: "#lotes" },
    { label: "Arte e pinturas", href: "#lotes" },
    { label: "Mobiliário antigo", href: "#lotes" },
    { label: "Joias e relógios", href: "#lotes" },
  ],
  plataforma: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Regras dos leilões", href: "/regras" },
    { label: "Histórico de lances", href: "/auditoria" },
    { label: "Perguntas frequentes", href: "/faq" },
  ],
  institucional: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Termos de uso", href: "/termos" },
    { label: "Privacidade", href: "/privacidade" },
    { label: "Contato", href: "/contato" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-2 md:py-16">
          <div className="max-w-md">
            <a
              href="/"
              aria-label="Arremata - Página inicial"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-primary">
                <Gavel size={24} />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Arremata
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-background/70">
              Um espaço para descobrir antiguidades, valorizar histórias
              e encontrar peças extraordinárias por meio de leilões
              transparentes.
            </p>

            <a
              href="#lotes"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-background"
            >
              Explore os leilões
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold text-gold">
                Explorar
              </h3>

              <ul className="mt-5 space-y-3">
                {footerLinks.explorar.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gold">
                Plataforma
              </h3>

              <ul className="mt-5 space-y-3">
                {footerLinks.plataforma.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-bold text-gold">
                Institucional
              </h3>

              <ul className="mt-5 space-y-3">
                {footerLinks.institucional.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-background/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-background/60">
            Tem alguma dúvida? Entre em contato com nossa equipe.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/contato"
              className="inline-flex items-center gap-2 text-sm text-background/75 transition-colors hover:text-gold"
            >
              <Mail size={16} />
              Fale conosco
            </a>

            <a
              href="/sobre"
              className="inline-flex items-center gap-2 text-sm text-background/75 transition-colors hover:text-gold"
            >
              <MapPin size={16} />
              Sobre a Arremata
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-background/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Arremata. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

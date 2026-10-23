import { useState, type FormEvent } from "react";
import { X, Gavel, Mail, Lock, UserRound } from "lucide-react";
import { AnimationPresenceMotion } from "../../Motion/AnimationPresenceMotion";
import { MotionContainer } from "../../Motion/MotionContainer";
import LoadingButtonCreateForm from "../../Button/LoadingButtonCreateForm";

interface ModalAuthProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AuthFormData) => void;
  isLoading?: boolean;
}

export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
  mode: "login" | "register";
}

export function ModalAuth({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}: ModalAuthProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isRegister = mode === "register";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      ...(isRegister && { name: name.trim() }),
      email: email.trim(),
      password,
      mode,
    });
  }

  function handleClose() {
    if (isLoading) return;

    onClose();
  }

  function handleModeChange() {
    if (isLoading) return;

    setMode((current) =>
      current === "login" ? "register" : "login",
    );
  }

  return (
    <AnimationPresenceMotion>
      {isOpen && (
        <MotionContainer
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <MotionContainer
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
            className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="relative flex flex-col items-center px-6 pb-5 pt-8 text-center">
              <button
                type="button"
                onClick={handleClose}
                disabled={isLoading}
                aria-label="Fechar modal"
                className="absolute right-4 top-4 rounded-lg p-2 text-text-muted transition-colors hover:bg-muted hover:text-text disabled:opacity-50 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-gold">
                <Gavel size={28} strokeWidth={2} />
              </div>

              <h2
                id="auth-modal-title"
                className="text-2xl font-bold tracking-tight text-text"
              >
                {isRegister
                  ? "Crie sua conta"
                  : "Bem-vindo ao Arremata"}
              </h2>

              <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                {isRegister
                  ? "Cadastre-se para participar de leilões e conquistar peças únicas."
                  : "Entre para acompanhar seus lotes favoritos e dar seus lances."}
              </p>
            </header>

            <form onSubmit={handleSubmit} className="px-6 pb-6">
              {isRegister && (
                <div className="mb-4">
                  <label
                    htmlFor="auth-name"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Nome completo
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                    />

                    <input
                      id="auth-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
                    />
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="auth-email"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  E-mail
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                  />

                  <input
                    id="auth-email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@exemplo.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="auth-password"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Senha
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                  />

                  <input
                    id="auth-password"
                    type="password"
                    autoComplete={
                      isRegister ? "new-password" : "current-password"
                    }
                    placeholder="••••••••"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    minLength={8}
                    required
                    disabled={isLoading}
                    className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
                  />
                </div>

                <p className="mt-2 text-xs text-text-muted">
                  {isRegister
                    ? "Sua senha deve ter pelo menos 8 caracteres."
                    : "Informe a senha cadastrada na sua conta."}
                </p>
              </div>

              <LoadingButtonCreateForm
                isLoading={isLoading}
                onClick={() => {}}
              >
                {isRegister ? "Criar minha conta" : "Entrar"}
              </LoadingButtonCreateForm>

              <p className="mt-5 text-center text-sm text-text-muted">
                {isRegister
                  ? "Já possui uma conta?"
                  : "Ainda não possui uma conta?"}{" "}
                <button
                  type="button"
                  onClick={handleModeChange}
                  disabled={isLoading}
                  className="font-semibold text-accent transition-colors hover:text-primary hover:underline disabled:opacity-50 cursor-pointer"
                >
                  {isRegister ? "Fazer login" : "Registrar-se"}
                </button>
              </p>
            </form>

            <footer className="border-t border-border bg-muted/40 px-6 py-3">
              <p className="text-center text-xs text-text-muted">
                Ao continuar, você concorda com os termos de uso do Arremata.
              </p>
            </footer>
          </MotionContainer>
        </MotionContainer>
      )}
    </AnimationPresenceMotion>
  );
}
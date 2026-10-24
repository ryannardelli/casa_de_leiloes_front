import { useState, type FormEvent } from "react";
import { Lock, Mail } from "lucide-react";
import LoadingButtonCreateForm from "../../../ui/shared/Button/LoadingButtonCreateForm";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  isLoading?: boolean;
}

export function LoginForm({
  onSubmit,
  isLoading = false,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      email: email.trim(),
      password,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-6">
      <div className="mb-4">
        <label
          htmlFor="login-email"
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
            id="login-email"
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
          htmlFor="login-password"
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
            id="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            disabled={isLoading}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        <p className="mt-2 text-xs text-text-muted">
          Informe a senha cadastrada na sua conta.
        </p>
      </div>

      <LoadingButtonCreateForm
        isLoading={isLoading}
        onClick={() => {}}
      >
        Entrar
      </LoadingButtonCreateForm>
    </form>
  );
}

import { useState, type FormEvent } from "react";
import { Lock, Mail, UserRound } from "lucide-react";
import LoadingButtonCreateForm from "../../../ui/shared/Button/LoadingButtonCreateForm";

interface RegisterFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
  }) => void;
  isLoading?: boolean;
}

export function RegisterForm({
  onSubmit,
  isLoading = false,
}: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      name: name.trim(),
      email: email.trim(),
      password,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-6">
      <div className="mb-4">
        <label
          htmlFor="register-name"
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
            id="register-name"
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

      <div className="mb-4">
        <label
          htmlFor="register-email"
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
            id="register-email"
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
          htmlFor="register-password"
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
            id="register-password"
            type="password"
            autoComplete="new-password"
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
          Sua senha deve ter pelo menos 8 caracteres.
        </p>
      </div>

      <LoadingButtonCreateForm
        isLoading={isLoading}
        onClick={() => {}}
      >
        Criar minha conta
      </LoadingButtonCreateForm>
    </form>
  );
}

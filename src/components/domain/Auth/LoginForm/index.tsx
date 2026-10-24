import { useState, type FormEvent } from "react";
import { Lock, Mail } from "lucide-react";
import LoadingButtonCreateForm from "../../../ui/shared/Button/LoadingButtonCreateForm";
import { LoginSchema, type LoginFormData } from "../../../../schemas/Auth/LoginSchema";

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void | Promise<void>;
  isLoading?: boolean;
}

export function LoginForm({
  onSubmit,
  isLoading = false,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = LoginSchema.safeParse({ email, password });

    if (!result.success) {
      setErrors({
        email: result.error.issues.find(
          (issue) => issue.path[0] === "email"
        )?.message,
        password: result.error.issues.find(
          (issue) => issue.path[0] === "password"
        )?.message,
      });

      return;
    }

    setErrors({});
    await onSubmit(result.data);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="px-6 pb-6">
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
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((current) => ({ ...current, email: undefined }));
            }}
            required
            disabled={isLoading}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "login-email-error" : undefined}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        {errors.email && (
          <p id="login-email-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.email}
          </p>
        )}
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
            onChange={(event) => {
              setPassword(event.target.value);
              setErrors((current) => ({ ...current, password: undefined }));
            }}
            required
            disabled={isLoading}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "login-password-error" : undefined}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        {errors.password ? (
          <p id="login-password-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.password}
          </p>
        ) : (
          <p className="mt-2 text-xs text-text-muted">
            Informe a senha cadastrada na sua conta.
          </p>
        )}
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

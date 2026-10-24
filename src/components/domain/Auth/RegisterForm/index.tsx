import { useState, type FormEvent } from "react";
import { Lock, Mail, UserRound } from "lucide-react";
import LoadingButtonCreateForm from "../../../ui/shared/Button/LoadingButtonCreateForm";
import { RegisterSchema, type RegisterFormData } from "../../../../schemas/Auth/RegisterSchema";

interface RegisterFormProps {
  onSubmit: (
    data: Omit<RegisterFormData, "confirmPassword">
  ) => void | Promise<void>;
  isLoading?: boolean;
}

export function RegisterForm({
  onSubmit,
  isLoading = false,
}: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormData, string>>
  >({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = RegisterSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      setErrors({
        name: result.error.issues.find(
          (issue) => issue.path[0] === "name"
        )?.message,
        email: result.error.issues.find(
          (issue) => issue.path[0] === "email"
        )?.message,
        password: result.error.issues.find(
          (issue) => issue.path[0] === "password"
        )?.message,
        confirmPassword: result.error.issues.find(
          (issue) => issue.path[0] === "confirmPassword"
        )?.message,
      });

      return;
    }

    setErrors({});

    const { confirmPassword: _, ...data } = result.data;

    await onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="px-6 pb-6">
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
            onChange={(event) => {
              setName(event.target.value);
              setErrors((current) => ({ ...current, name: undefined }));
            }}
            required
            disabled={isLoading}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "register-name-error" : undefined}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        {errors.name && (
          <p id="register-name-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.name}
          </p>
        )}
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
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((current) => ({ ...current, email: undefined }));
            }}
            required
            disabled={isLoading}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "register-email-error" : undefined}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        {errors.email && (
          <p id="register-email-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-4">
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
            onChange={(event) => {
              setPassword(event.target.value);
              setErrors((current) => ({
                ...current,
                password: undefined,
                confirmPassword: undefined,
              }));
            }}
            minLength={8}
            required
            disabled={isLoading}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "register-password-error" : undefined}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        {errors.password ? (
          <p id="register-password-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.password}
          </p>
        ) : (
          <p className="mt-2 text-xs text-text-muted">
            Sua senha deve ter pelo menos 8 caracteres.
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="register-confirm-password"
          className="mb-2 block text-sm font-medium text-text"
        >
          Confirmar senha
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            id="register-confirm-password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setErrors((current) => ({
                ...current,
                confirmPassword: undefined,
              }));
            }}
            required
            disabled={isLoading}
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={
              errors.confirmPassword
                ? "register-confirm-password-error"
                : undefined
            }
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm text-text outline-none transition placeholder:text-text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
          />
        </div>

        {errors.confirmPassword && (
          <p
            id="register-confirm-password-error"
            role="alert"
            className="mt-1 text-xs text-red-500"
          >
            {errors.confirmPassword}
          </p>
        )}
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

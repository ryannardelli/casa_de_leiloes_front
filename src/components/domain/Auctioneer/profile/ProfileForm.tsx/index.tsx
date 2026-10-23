import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import type { UserProfile } from "../../../../../mocks/auctioneer/profile.mock";

interface ProfileFormProps {
  profile: UserProfile;
  onSave: (data: Pick<UserProfile, "name" | "email" | "phone">) => void;
}

export function ProfileForm({ profile, onSave }: ProfileFormProps) {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
  }, [profile]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim()) {
      setError("Informe seu nome.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }

    onSave({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });

    setSuccess(true);
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-text">
          Informações pessoais
        </h2>

        <p className="mt-1 text-sm text-text-muted">
          Atualize os dados associados à sua conta.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="profile-name"
            className="text-sm font-medium text-text"
          >
            Nome completo
          </label>

          <input
            id="profile-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome completo"
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label
            htmlFor="profile-email"
            className="text-sm font-medium text-text"
          >
            E-mail
          </label>

          <input
            id="profile-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@email.com"
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label
            htmlFor="profile-phone"
            className="text-sm font-medium text-text"
          >
            Telefone
          </label>

          <input
            id="profile-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(00) 00000-0000"
            className={inputClasses}
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}

        {success && (
          <p role="status" className="text-sm text-green-600">
            Dados atualizados nesta sessão.
          </p>
        )}

        <div className="flex justify-end border-t border-border pt-5">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Save size={17} />
            Salvar alterações
          </button>
        </div>
      </form>
    </section>
  );
}
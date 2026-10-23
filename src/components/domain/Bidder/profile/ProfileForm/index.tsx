import { useState, type FormEvent } from "react";
import { Save, UserRound } from "lucide-react";
import type { UserProfile } from "../../../../../mocks/bidder/profile.mock";


interface ProfileFormProps {
  profile: UserProfile;
  onSave: (data: Pick<UserProfile, "name" | "email" | "phone">) => void;
}

export function ProfileForm({ profile, onSave }: ProfileFormProps) {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();

    if (normalizedName.length < 3) {
      setFeedback("Informe um nome com pelo menos 3 caracteres.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setFeedback("Informe um endereço de e-mail válido.");
      return;
    }

    onSave({
      name: normalizedName,
      email: normalizedEmail,
      phone: phone.trim(),
    });

    setFeedback("Dados atualizados nesta sessão.");
  }

  const inputClassName =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-accent";

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex items-center gap-3 border-b border-border pb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
          <UserRound size={20} />
        </div>

        <div>
          <h2 className="font-semibold">Informações pessoais</h2>
          <p className="text-sm text-text-muted">
            Mantenha seus dados atualizados.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        <div>
          <label htmlFor="profile-name" className="text-sm font-medium">
            Nome completo
          </label>

          <input
            id="profile-name"
            type="text"
            autoComplete="name"
            required
            minLength={3}
            maxLength={120}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClassName}
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="profile-email" className="text-sm font-medium">
            E-mail
          </label>

          <input
            id="profile-email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClassName}
            placeholder="voce@exemplo.com"
          />
        </div>

        <div>
          <label htmlFor="profile-phone" className="text-sm font-medium">
            Telefone
          </label>

          <input
            id="profile-phone"
            type="tel"
            autoComplete="tel"
            maxLength={20}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={inputClassName}
            placeholder="(11) 99999-9999"
          />
        </div>

        {feedback && (
          <p
            role="status"
            className="rounded-lg bg-muted px-3 py-2 text-sm text-text"
          >
            {feedback}
          </p>
        )}

        <div className="flex justify-end border-t border-border pt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Save size={17} />
            Salvar alterações
          </button>
        </div>
      </form>
    </section>
  );
}